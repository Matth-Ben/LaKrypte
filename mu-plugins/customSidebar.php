<?php

add_action( 'widgets_init', 'custom_widgets_init');
function custom_widgets_init() {
    register_sidebar( array(
        'name' => 'Footer 1',
        'id' => 'footer__widget__1',
        'before_widget' => '<div class="footer--widget">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="rounded">',
        'after_title' => '</h2>',
    ) );
    register_sidebar( array(
        'name' => 'Footer 2',
        'id' => 'footer__widget__2',
        'before_widget' => '<div class="footer--widget">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="rounded">',
        'after_title' => '</h2>',
    ) );
    register_sidebar( array(
        'name' => 'Footer 3',
        'id' => 'footer__widget__3',
        'before_widget' => '<div class="footer--widget">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="rounded">',
        'after_title' => '</h2>',
    ) );
    register_sidebar( array(
        'name' => 'On Footer',
        'id' => 'on__footer',
        'before_widget' => '<div class="on--footer">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="rounded">',
        'after_title' => '</h2>',
    ) );
}