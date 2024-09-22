<?php
/**
 * Plugin Name:       Posts Block Lite
 * Plugin URI:        https://github.com/troytempleman/posts-block-lite
 * Description:       A block that displays posts in a list, grid or carousel. 
 * Version:           0.1.0
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Author:            Troy Templeman
 * Author URI:        http://troytempleman.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       posts-block
 * Domain Path:       /languages
 */
 
// Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register block
function posts_block_register() {
	register_block_type( 
		__DIR__ . '/build'
	);
}
add_action( 'init', 'posts_block_register' );

// Block assets
function posts_block_assets() {
	
	// Front end
	if( ! is_admin() ) {
		
		// Slick style
		wp_enqueue_style(
	        'slick-style',
	        plugins_url( 'posts-block-lite/src/slick/slick.css', dirname( __FILE__ ) ),
			array(),
	        '1.6.0',
			'all'
	    );
		// Slick theme style
		wp_enqueue_style(
	        'slick-theme-style',
	        plugins_url( 'posts-block-lite/src/slick/slick-theme.css', dirname( __FILE__ ) ),
			array( 'slick-style' ),
	        '1.6.0',
			'all'
	    );
		// Slick 
		wp_enqueue_script(
			'slick',
			plugins_url( 'posts-block-lite/src/slick/slick.min.js', dirname( __FILE__ ) ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'jquery' ), 
			true 
		);
		// Slick init
		wp_enqueue_script(
			'slick-init', 
			plugins_url( 'posts-block-lite/src/slick/slick-init.js', dirname( __FILE__ ) ), 
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'jquery' ), 
			true 
		);
	}
}
add_action( 'enqueue_block_assets', 'posts_block_assets' );
