<?php

/**
 * Block Patterns Registration
 *
 * @package wc-logrono-2025-talk
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Register a block pattern category.
 */
function wclg_register_block_pattern_category()
{
    register_block_pattern_category(
        'wc-logrono-2025-talk', // Category slug
        array('label' => __('WC Logrono 2025', 'wc-logrono-2025-talk'))
    );
}

/**
 * Scan the patterns directory and register patterns found.
 */
function wclg_register_patterns()
{
    $pattern_dir = WC_LOGRONO_2025_PLUGIN_DIR . 'patterns/'; // Use defined constant
    // Scan for PHP files (metadata)
    $pattern_php_files = glob($pattern_dir . '*.php');

    if (empty($pattern_php_files)) {
        return;
    }

    // Define base URL for images within the patterns directory
    $default_image_dir_url = WC_LOGRONO_2025_PLUGIN_URL . 'patterns/images/';

    // image_map is removed as filenames are expected directly in HTML src attributes

    foreach ($pattern_php_files as $php_file) {
        $pattern_data = include $php_file;
        $pattern_slug = basename($php_file, '.php');
        $html_file    = $pattern_dir . $pattern_slug . '.html'; // Construct HTML file path

        // Check if metadata and HTML file exist
        if (is_array($pattern_data) && isset($pattern_data['title']) && file_exists($html_file)) {

            // Read content template from HTML file
            $content_template = file_get_contents($html_file);

            if ($content_template === false) {
                // Optional: Log error if HTML file is unreadable
                error_log('Could not read pattern content file: ' . $html_file);
                continue; // Skip this pattern
            }

            // Use WP_HTML_Tag_Processor to update image src attributes
            $processor = new WP_HTML_Tag_Processor($content_template);
            while ($processor->next_tag('img')) {
                $src = $processor->get_attribute('src');
                // Check if src exists and looks like a relative filename (no scheme or path separators)
                if ($src && strpos($src, ':') === false && strpos($src, '/') === false) {
                    $full_url = esc_url($default_image_dir_url . $src);
                    $processor->set_attribute('src', $full_url);
                }
            }
            $final_content = $processor->get_updated_html();

            register_block_pattern(
                'wc-logrono-2025-talk/' . $pattern_slug,
                array(
                    'title'       => $pattern_data['title'],
                    'description' => $pattern_data['description'] ?? '',
                    'categories'  => $pattern_data['categories'] ?? ['wc-logrono-2025-talk'],
                    'content'     => $final_content,
                    'blockTypes'  => $pattern_data['blockTypes'] ?? null,
                    'viewportWidth' => $pattern_data['viewportWidth'] ?? null,
                )
            );
        } else {
            // Optional: Log warning if metadata is missing or HTML file doesn't exist
            if (!file_exists($html_file)) {
                error_log('Pattern HTML file not found: ' . $html_file);
            }
        }
    }
}
