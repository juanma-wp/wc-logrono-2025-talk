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
	// Log function entry and arguments
	do_action('qm/debug', 'Entering wclg_random_quote_binding');
	do_action('qm/debug', 'Source Args: ' . print_r($source_args, true));
	// Optionally log block instance and attribute name if needed for debugging
	// do_action('qm/debug', 'Block Instance: ' . print_r($block_instance, true));
	// do_action('qm/debug', 'Attribute Name: ' . $attribute_name);

	$tags = $source_args['tags'] ?? ''; // Use null coalescing operator for safety
	if (empty($tags)) {
		do_action('qm/warning', 'No tags provided in source_args.');
		return '';
	}

	// Update API Endpoint structure for thequoteshub.com (assuming /tags/{tag} structure)
	$URL_FETCH_QUOTES = API_BASE_URL . '/tags/' . urlencode($tags); // Ensure tags are URL encoded

	do_action('qm/info', 'Fetching quotes from URL: ' . $URL_FETCH_QUOTES);

	$response = wp_remote_get($URL_FETCH_QUOTES);

	if (is_wp_error($response)) {
		do_action('qm/error', 'WP_Error fetching quote: ' . $response->get_error_message());
		return '';
	}

	$response_code = wp_remote_retrieve_response_code($response);
	$body = wp_remote_retrieve_body($response);
	do_action('qm/debug', 'API Response Code: ' . $response_code);
	do_action('qm/debug', 'API Response Body: ' . $body);

	if ($response_code !== 200) {
		do_action('qm/error', 'API returned non-200 status code: ' . $response_code);
		return '';
	}

	$data = json_decode($body, true);

	if (json_last_error() !== JSON_ERROR_NONE) {
		do_action('qm/error', 'JSON Decode Error: ' . json_last_error_msg());
		return '';
	}

	do_action('qm/debug', 'Decoded Data: ' . print_r($data, true));

	// --- Adjust data parsing based on the ACTUAL structure of the /tags/{tag} endpoint --- 
	// The previous code assumed an array like [{content: '...', author: '...'}]
	// The actual structure for /tags/{tag} needs verification.
	// Let's assume it's similar to the /authors/{author_id} structure:
	// { "tag": "...", "quotes": [ { "text": "...", "author": "..." }, ... ] }

	$return_value = ''; // Default return value

	if (isset($data['quotes']) && is_array($data['quotes']) && !empty($data['quotes'])) {
		// Select a random quote from the array
		$random_quote = $data['quotes'][array_rand($data['quotes'])];

		if (isset($random_quote['text']) && isset($random_quote['author'])) {
			// Add inline style (consider moving this to CSS or block style variations)
			$custom_css = ".wp-block-quote span.qa_author { font-size: smaller; padding-top: 1em; display: block; text-align: right; }";
			wp_add_inline_style('wp-block-library', $custom_css); // Attach to a more common handle

			$return_value = esc_html($random_quote['text']) . '<span class="qa_author">' . esc_html($random_quote['author']) . '</span>';
			do_action('qm/debug', 'Formatted quote found.');
		} else {
			do_action('qm/warning', 'Random quote object missing text or author key.');
		}
	} else {
		do_action('qm/warning', 'No quotes found in the response data or data structure mismatch.');
	}
	// --- End of structure-dependent code ---

	do_action('qm/debug', 'Returning value: ' . $return_value);
	return $return_value;
}
