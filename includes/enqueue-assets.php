<?php

/**
 * This file contains the functions related to enqueuing assets.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Enqueues the `assets/js/block-variations.js` file, which is used to create
 * custom block styles.
 *
 * @link  https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
function wclg_enqueue_block_variations_script()
{
	$script_path = WC_LOGRONO_2025_PLUGIN_DIR . 'build/index.asset.php';
	$script_asset = file_exists($script_path) ? include $script_path : array('dependencies' => array(), 'version' => filemtime(WC_LOGRONO_2025_PLUGIN_DIR . 'build/index.js'));

	wp_enqueue_script(
		'quote-variations-js',
		plugins_url('build/index.js', dirname(__FILE__, 2) . '/wc-logrono-2025-talk.php'),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
}
