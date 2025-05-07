<?php

/**
 * Core Block Interactivity Modifications
 *
 * Filters core blocks to inject interactivity attributes and registers related scripts.
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the script modules for interactive blocks.
 * Remember to hook this function to 'init' in the main plugin file.
 */
function wclg_register_interactive_scripts()
{
    // Ensure the plugin URL constant is defined before using it.
    // Define a fallback version if the constant is not set.
    $plugin_version = defined('WC_LOGRONO_2025_VERSION') ? WC_LOGRONO_2025_VERSION : null;

    if (defined('WC_LOGRONO_2025_PLUGIN_URL')) {
        wp_register_script_module(
            'wclg/media-text-interactive', // The handle being registered
            WC_LOGRONO_2025_PLUGIN_URL . 'build/iapi.js', // The script file
            array('wp-interactivity'), // Dependencies
            $plugin_version // Version
        );
    } else {
        // Log an error or handle the case where the constant is not defined.
        error_log('WC_LOGRONO_2025_PLUGIN_URL constant is not defined when registering script module in core-block-interactivity.php');
    }
}
// Note: add_action( 'init', 'wclg_register_interactive_scripts' ); should be in the main plugin file.

/**
 * Filters the core/group block to add interactivity attributes and enqueue scripts
 * when the 'interactive-video' class is present. It also modifies nested
 * button and video blocks within that group.
 *
 * @param string $block_content Block content.
 * @param array  $block Block.
 * @return string Modified block content.
 */
function wclg_filter_group_block_add_interactivity_directives($block_content, $block)
{
    // Check if it's a group block and has the specific class name.
    if (
        'core/group' === $block['blockName'] && isset($block['attrs']['className'])
        && str_contains($block['attrs']['className'], 'interactive-video')
    ) {

        // Enqueue the script module.
        wp_enqueue_script_module('wclg/media-text-interactive');

        // Use WP_HTML_Tag_Processor to modify the block content.
        $p = new WP_HTML_Tag_Processor($block_content);

        // Add attributes to the main group block wrapper.
        if ($p->next_tag()) {
            $p->set_attribute('data-wp-interactive', '{ "namespace": "wclg/media-text-interactive" }');
            $p->set_attribute('data-wp-context', '{ "isPlaying": false, "buttonText": "Play" }');
            // Set a bookmark after modifying the main group tag.
            $p->set_bookmark('main_group_tag');
        } else {
            // If we can't even find the first tag, return early.
            // Consider adding a log message here if needed.
            return $block_content;
        }

        // ... more code

        // Return the fully modified HTML.
        return $p->get_updated_html();
    }

    // Return original content if it's not the target group block or class not found.
    return $block_content;
}

add_filter('render_block_core/group', 'wclg_filter_group_block_add_interactivity_directives', 10, 2);
