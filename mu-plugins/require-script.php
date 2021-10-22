<?php
/*
MU Plugin: Require Script
Description: Importer le script
Version1: 21 09 2021
*/

if ( ! is_admin() ) {
    wp_enqueue_script('cloudflare', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js', array(), false, false);
    wp_enqueue_script('lakrypte-script', get_template_directory_uri() . '/public/js/index.js', array(), '1.0.0', true);
    wp_enqueue_script('lakrypte-animation', get_template_directory_uri() . '/public/js/animation.js', array(), '1.0.0', true);
//    wp_enqueue_script('lakrypte-preloader', get_template_directory_uri() . '/public/js/preloader.js', array(), '1.0.0', false);
    wp_enqueue_script('ajax__loads', get_template_directory_uri() . '/public/js/ajax__loads.js', array(), '1.0.0', false);
    wp_enqueue_script('ajax__history', get_template_directory_uri() . '/public/js/ajax__history.js', array(), '1.0.0', false);
}
?>