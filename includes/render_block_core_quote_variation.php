<?php

/**
 * Render the quote-api-frontend variation
 * 
 * @param string $block_content The block content.
 * @param array $block The block.
 * @return string The block content.
 */
function wclg_render_block_core_quote_variation($block_content, $block)
{
    // Only apply to the quote-api-frontend variation
    if (!isset($block['attrs']['namespace']) || $block['attrs']['namespace'] !== 'quote-api-frontend') {
        return $block_content;
    }
    $tags = isset($block['attrs']['tags']) ? $block['attrs']['tags'] : '';
    if (empty($tags)) {
        return $block_content;
    }

    // Build the API URL
    $URL_FETCH_QUOTES = API_BASE_URL . '/tags/' . urlencode($tags);
    $response = wp_remote_get($URL_FETCH_QUOTES);
    if (is_wp_error($response)) {
        return $block_content;
    }

    $body = wp_remote_retrieve_body($response);
    $data = json_decode($body, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        return  '<p><em>Error fetching quotes</em></p>' . $block_content;
    }

    if (isset($data['quotes']) && is_array($data['quotes']) && !empty($data['quotes'])) {
        $random_quote = $data['quotes'][array_rand($data['quotes'])];
        if (isset($random_quote['text'], $random_quote['author'])) {
            // Build the class attribute for blockquote
            $base_classes = 'wp-block-quote';
            $extra_class = isset($block['attrs']['className']) ? ' ' . esc_attr($block['attrs']['className']) : '';
            $all_classes = $base_classes . $extra_class;
            $block_content = sprintf(
                '<blockquote class="%s"><p>%s</p><cite>%s</cite></blockquote>',
                $all_classes,
                esc_html($random_quote['text']),
                esc_html($random_quote['author'])
            );
        }
    }
    return $block_content;
}
add_filter('render_block_core/quote', 'wclg_render_block_core_quote_variation', 10, 2);
