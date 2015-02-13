<?php

include( 'inc/plugin-activation.class.php' );
include( 'theme.class.php' );



/* ====================================== */
/* THEME FUNCTIONS */
/* ====================================== */

add_theme_support( 'post-thumbnails' );//adds featured image support


/**
*
* Get a snippet/excerpt from any content
* This is a much more robust replacement for WP's excerpt field. This will generate a snippet from any text string.
*
**/
function get_snippet( $content, $limit, $break=" ", $pad="..." ) {
	if(strlen($content) <= $limit) {
		return wpautop($content);
	}
	if(false !== ($breakpoint = strpos($content, $break, $limit))) {
		if($breakpoint < strlen($content) - 1) {
			$content = substr($content, 0, $breakpoint) . $pad;
		}
	}
 	return wpautop($content);
}

/**
*
* Modify the body_class function
* source: http://mimoymima.com/better-body-class-function-wordpress/
*
**/
function condensed_body_class($classes) {
    global $post;

    // add a class for the name of the page - later might want to remove the auto generated pageid class which isn't very useful
    if( is_page()) {
        $pn = $post->post_name;
        $classes[] = "page_".$pn;
    }

		// add a class for the parent page name
		if ( is_page() && $post->post_parent ) {
				$post_parent = get_post($post->post_parent);
				$parentSlug = $post_parent->post_name;
				$classes[] = "parent_".$parentSlug;
		}

    // add class for the name of the custom template used (if any)
    $temp = get_page_template();
    if ( $temp != null ) {
        $path = pathinfo($temp);
        $tmp = $path['filename'] . "." . $path['extension'];
        $tn= str_replace(".php", "", $tmp);
        $classes[] = "template_".$tn;
    }

    return $classes;

}

add_filter('body_class', 'condensed_body_class');





?>
