<?php

/**
 * This file contains the functions related to registering block styles.
 *
 * @package tt4-dh-alternatives-custom-blocks
 * @since 1.0.0
 */

/**
 * Registers the custom block bindings source for the 'qa/random-quote' block.
 *
 * @return void
 */
function wclg_register_block_bindings_source()
{
	register_block_bindings_source('qa/random-quote-tags', array(
		'label'              => __('Random Quote', 'dh-alternatives-custom-blocks'),
		'get_value_callback' => 'wclg_random_quote_binding',
	));
}


/**
 * Retrieves a random quote from the quotable.io API and returns it as a formatted string.
 *
 * @param array $source_args The source arguments.
 * @param WP_Block $block_instance The block instance.
 * @param string $attribute_name The attribute name.
 * @return string The formatted content of paragraph.
 */
function wclg_random_quote_binding($source_args, $block_instance, $attribute_name)
{

	$tags = $source_args['tags'] ?? ''; // Use null coalescing operator for safety
	if (empty($tags)) {
		return '';
	}

	// Update API Endpoint structure for thequoteshub.com (assuming /tags/{tag} structure)
	$URL_FETCH_QUOTES = API_BASE_URL . '/tags/' . urlencode($tags); // Ensure tags are URL encoded

	$response = wp_remote_get($URL_FETCH_QUOTES);

	if (is_wp_error($response)) {
		// Log the error for administrators/developers
		error_log('External API Error in block binding: ' . $response->get_error_message());
		// Return an empty string or a specific placeholder
		return ''; // Or return '[Data unavailable]';
	}

	$response_code = wp_remote_retrieve_response_code($response);
	$body = wp_remote_retrieve_body($response);

	if ($response_code !== 200) {
		error_log('External API Error in block binding: Received HTTP status ' . $response_code);
		return '';
	}

	$data = json_decode($body, true);

	if (json_last_error() !== JSON_ERROR_NONE) {
		error_log('External API Error in block binding: JSON Decode Error - ' . json_last_error_msg());
		return '';
	}


	$return_value = ''; // Default return value

	if (isset($data['quotes']) && is_array($data['quotes']) && !empty($data['quotes'])) {
		// Select a random quote from the array
		$random_quote = $data['quotes'][array_rand($data['quotes'])];

		if (isset($random_quote['text']) && isset($random_quote['author'])) {
			// Add inline style (consider moving this to CSS or block style variations)
			$custom_css = ".wp-block-quote span.qa_author { font-size: smaller; padding-top: 1em; display: block; text-align: right; }";
			wp_add_inline_style('wp-block-library', $custom_css); // Attach to a more common handle

			$return_value = esc_html($random_quote['text']) . '<span class="qa_author">' . esc_html($random_quote['author']) . '</span>';
		} else {
			error_log('External API Error in block binding: Quote object missing text or author key.');
		}
	} else {
		error_log('External API Error in block binding: No quotes found in API response or data structure mismatch.');
	}

	return $return_value;
}
