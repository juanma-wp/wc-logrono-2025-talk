<?php

/**
 * Block Styles Registration
 *
 * @package wc-logrono-2025-talk
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Register custom block styles.
 */
function wclg_register_block_styles()
{

    // Define the base styles from the JSON file.
    $base_styles = '
        color: var(--wp--preset--color--accent-3);
        border-color: var(--wp--preset--color--accent-3);
        border-style: solid;
        border-width: 2px;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        box-shadow: var(--wp--preset--shadow--natural);
    ';

    // CSS for core/quote block with the specific style selector
    $inline_css_quote = ".wp-block-quote.is-style-hand-drawn { {$base_styles} }";

    // Register the style for core/quote block.
    register_block_style(
        'core/quote',
        array(
            'name'         => 'hand-drawn',
            'label'        => __('Hand Drawn', 'wc-logrono-2025-talk'),
            'inline_style' => $inline_css_quote,
        )
    );
}
