<?php
/**
 * Template Name: Membre
 * Description: A Page Template with a darker design.
 */

$context = Timber::context();

$args = array(
    'post_type' => 'artistes',
    'posts_per_page' => -1,
    'orderby' => array(
        'date' => 'DESC'
    ),
);
$context['membres'] = Timber::get_posts( $args );
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'template-membre.twig' ), $context );