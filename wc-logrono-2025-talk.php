<?php

/**
 * Plugin Name:       WC Logrono 2025 Talk
 * Description:       Example plugin demonstrating block bindings and interactivity API.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Juan M. Garrido
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wc-logrono-2025-talk
 *
 * @package         wc-logrono-2025-talk
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Setup Constants.
define('WC_LOGRONO_2025_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WC_LOGRONO_2025_PLUGIN_URL', plugin_dir_url(__FILE__));
define('API_BASE_URL', 'https://thequoteshub.com/api');

// Include necessary files.
// Note: The included files likely need updates to use the new constants and plugin context.
require_once WC_LOGRONO_2025_PLUGIN_DIR . 'includes/register-source-block-binding.php';
require_once WC_LOGRONO_2025_PLUGIN_DIR . 'includes/enqueue-assets.php';
require_once WC_LOGRONO_2025_PLUGIN_DIR . 'includes/register-block-styles.php';
require_once WC_LOGRONO_2025_PLUGIN_DIR . 'includes/register-block-patterns.php';
require_once WC_LOGRONO_2025_PLUGIN_DIR . 'includes/core-block-interactivity.php';

// --- Register Hooks ---

// Initialization Hooks (Patterns, Styles, Bindings)
add_action('init', 'wclg_register_block_pattern_category');
add_action('init', 'wclg_register_patterns');

add_action('init', 'wclg_register_block_styles');

add_action('init', 'wclg_register_block_bindings_source');

// Interactivity Hooks
add_action('init', 'wclg_register_interactive_scripts');
add_filter('render_block_core/group', 'wclg_filter_group_block_enqueue_script', 10, 2);

// Asset Enqueuing Hooks
add_action('enqueue_block_editor_assets', 'wclg_enqueue_block_variations_script');


// --- Optional: Activation/Deactivation Hooks ---
// function wc_logrono_2025_activate() {
//     // Code to run on plugin activation
// }
// register_activation_hook( __FILE__, 'wc_logrono_2025_activate' );

// function wc_logrono_2025_deactivate() {
//     // Code to run on plugin deactivation
// }
// register_deactivation_hook( __FILE__, 'wc_logrono_2025_deactivate' );
