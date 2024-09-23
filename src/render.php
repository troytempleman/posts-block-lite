<?php

// Exit if accessed directly 
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Attributes
$layout = isset( $attributes['layout'] ) ? $attributes['layout'] : null;   
$text_align = isset( $attributes['textAlign'] ) ? $attributes['textAlign'] : null;
$number_of_posts = isset( $attributes['numberOfPosts'] ) ? $attributes['numberOfPosts'] : 5;
$order_by = isset( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
$order = isset( $attributes['order'] ) ? $attributes['order'] : 'desc';
$columns = isset( $attributes['columns'] ) ? $attributes['columns'] : 1;
$display_featured_image = isset( $attributes['displayFeaturedImage'] ) ? $attributes['displayFeaturedImage'] : null;
$display_title = isset( $attributes['displayTitle'] ) ? $attributes['displayTitle'] : true;
$title_has_heading = isset( $attributes['titleHasHeading'] ) ? $attributes['titleHasHeading'] : null;
$title_heading = isset( $attributes['titleHeading'] ) ? $attributes['titleHeading'] : 3;
$display_date = isset( $attributes['displayDate'] ) ? $attributes['displayDate'] : null;
$display_author = isset( $attributes['displayAuthor'] ) ? $attributes['displayAuthor'] : null;
$display_excerpt = isset( $attributes['displayExcerpt'] ) ? $attributes['displayExcerpt'] : null;
$excerpt_length = isset( $attributes['excerptLength'] ) ? $attributes['excerptLength'] : 55;
$display_content = isset( $attributes['displayContent'] ) ? $attributes['displayContent'] : null;
$display_link = isset( $attributes['displayLink'] ) ? $attributes['displayLink'] : null;
$link_text = isset( $attributes['linkText'] ) ? $attributes['linkText'] : 'Read more';
$display_carousel_dots = isset( $attributes['displayCarouselDots'] ) ? $attributes['displayCarouselDots'] : true;
$display_carousel_arrows = isset( $attributes['displayCarouselArrows'] ) ? $attributes['displayCarouselArrows'] : true;
$carousel_infinite = isset( $attributes['carouselInfinite'] ) ? $attributes['carouselInfinite'] : true;
$carousel_speed = isset( $attributes['carouselSpeed'] ) ? $attributes['carouselSpeed'] : 300;
$carousel_slides_to_show = isset( $attributes['carouselSlidesToShow'] ) ? $attributes['carouselSlidesToShow'] : 3;
$carousel_slides_to_scroll = isset( $attributes['carouselSlidesToScroll'] ) ? $attributes['carouselSlidesToScroll'] : 3;

// Wrapper
$wrapper = $layout === 'carousel' ? 'div' : 'ul';
$class = 'wp-block-tt-posts ';
$class .= $unique_class = wp_unique_id( 'wp-block-tt-posts-' );
$class .= $text_align ? ' has-text-align-' . $text_align : null;
$class .= $layout === 'grid' ? ' is-grid' : null;
$class .= $layout === 'grid' && $columns ? ' columns-' . $columns : null;
$class .= $layout === 'carousel' ? ' is-carousel' : null;
$class .= $display_date ? ' has-dates' : null;
$class .= $display_author ? ' has-author' : null;
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

// Carousel settings
if( $layout === 'carousel' ) {
	$carousel_settings = array(
		'dots' => $display_carousel_dots, 
		'arrows' => $display_carousel_arrows, 
		'infinite' => $carousel_infinite, 
		'speed' => $carousel_speed, 
		'slidesToShow' => $carousel_slides_to_show, 
		'slidesToScroll' => $carousel_slides_to_scroll
	);
	$data_slick = esc_attr( wp_json_encode( $carousel_settings ) );
}

// Query
$args = array(
	'posts_per_page' => $number_of_posts,
	'order' => $order,
	'orderby' => $order_by,
	'ignore_sticky_posts' => true,
	'no_found_rows' => true,
);
$query = new WP_Query( $args );

// Posts
$posts = '';
if ( $query->have_posts() ) {
    while ( $query->have_posts() ) : $query->the_post();
		$post = $layout === 'carousel' ? 'div' : 'li';
		$posts .= '<' . $post . ' class="wp-block-tt-posts-post">';
		if( $display_featured_image && has_post_thumbnail() ) {
			$thumbnail = get_the_post_thumbnail( get_the_ID(), 'full', array( 'class' => $class . ' wp-block-tt-posts-post-thumbnail' ) );
			$posts .= '<div class="wp-block-tt-posts-post-featured-image">' . $thumbnail . '</div>';
		}
		if( $display_title ) {
			$title = get_the_title();
			$permalink = esc_url( get_permalink() );
			if( $title_has_heading ) {
				$posts .= '<h' . $title_heading . ' class="wp-block-tt-posts-post-title"><a href="' . $permalink . '">' . $title . '</a>';
			} else {
				$posts .= '<a class="wp-block-tt-posts-post-title" href="' . $permalink . '">' . $title . '</a>';
			}
			if( $title_has_heading ) {
				$posts .= '</h' . $title_heading . '>';
			}
		}
		if( $display_date || $display_author ) {
			$posts .= '<div class="wp-block-tt-posts-post-meta">';
			if( $display_date ) {
				$date = get_the_date();
				$date_iso_8601 = esc_attr( get_the_date( 'c' ) );
				/* translators: Posted */
				$posts .= '<span class="wp-block-tt-posts-post-meta-date">' .  __( 'Posted ', 'posts-block-lite' ) . '<time class="wp-block-tt-posts-post-meta-date-time" datetime="' . $date_iso_8601 . '">' . $date . '</time></span>' . ' ';
			}
			if( $display_author ) {
				$author = get_the_author();
				$author_url = esc_url( get_author_posts_url( get_the_author_meta( get_the_ID() ) ) );
				/* translators: %s: Author */
				$byline = sprintf( __( 'by %s', 'posts-block-lite' ), '<a class="wp-block-tt-posts-post-meta-author-link" href="' . $author_url . '">' . $author . '</a>' );
				$posts .= '<span class="wp-block-tt-posts-post-meta-author">' . $byline . '</span>';
			}
			$posts .= '</div>';
		}
		if( $display_excerpt ) {
			$excerpt = wp_trim_words( get_the_excerpt(), $excerpt_length ); 
			$posts .= '<div class="wp-block-tt-posts-post-excerpt">' . $excerpt . '</div>';
		}
		if( $display_content ) {
			$content = get_the_content();
			$posts .= '<div class="wp-block-tt-posts-post-content">' . $content . '</div>';	
		}
		if( $display_link ) {
			$permalink = esc_url( get_permalink() );
			$posts .= '<p class="wp-block-tt-posts-post-link"><a href="' . $permalink . '">' . $link_text . '</a></p>';
		}
		$posts .= '</' . $post . '>';
    endwhile;
} else {
	/* translators: Not Found */
    __( 'Not Found.', 'posts-block-lite' );
}
wp_reset_postdata();

// Block content
$block_content = '<' . $wrapper . ' ' . $wrapper_attributes .'>';
$block_content .= $layout === 'carousel' ? '<div class="carousel" data-slick='. $data_slick . '>' . $posts . '</div>' : $posts;
$block_content .= '</' . $wrapper . '>';
echo wp_kses_post( $block_content );

?>