<?php
/*
MU Plugin: Require Script
Description: Importer le script
Version1: 21 09 2021
*/

if ( ! is_admin() ) {
    wp_enqueue_script('cloudflare', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js', array(), false, false);
    wp_enqueue_script('lakrypte-script', get_template_directory_uri() . '/public/js/index.js', null, null, true);
    wp_enqueue_script('lakrypte-animation', get_template_directory_uri() . '/public/js/animation.js', null, null, true);
    wp_enqueue_script('tmpl-wp-playlist-item', get_template_directory_uri() . '/public/js/tmpl-wp-playlist-item.js', null, null, true);
    wp_enqueue_script('tmpl-wp-playlist-current-item', get_template_directory_uri() . '/public/js/tmpl-wp-playlist-current-item.js', null, null, true);
    wp_enqueue_script('unpkg', 'https://unpkg.com/@barba/core', array(), false, false);
    wp_enqueue_script('gasp', 'https://unpkg.com/gsap@latest/dist/gsap.min.js', array(), false, false);
    wp_enqueue_script('jsdelivr', 'https://cdn.jsdelivr.net/npm/@barba/core', array(), false, false);
    wp_enqueue_script('helper', get_template_directory_uri() . '/public/js/helper.js', null, null, true);
    wp_enqueue_script('barbajs', get_template_directory_uri() . '/public/js/barba.js', null, null, true);
}
?>