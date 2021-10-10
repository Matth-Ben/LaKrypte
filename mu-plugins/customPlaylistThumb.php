<?php
namespace WPSE238646\PlaylistThumbSize;

add_shortcode( 'playlist', function( $atts = [], $content = '' )
{
    add_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\\src' , 10, 3 );
    $out = wp_playlist_shortcode( $atts, $content );
    remove_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\\src' );
    return $out;
} );

function src( $image, $id, $size )
{
    add_filter( 'image_downsize', __NAMESPACE__ . '\\size', 10, 3 );
    return $image;
}

function size( $downsize, $id, $size )
{
    remove_filter( current_filter(), __FUNCTION__ );
    if( 'thumbnail' !== $size )
        return $downsize;
    return image_downsize( $id, $size = 'large' );           // <-- Adjust size here!
}