<?php
/**
 * Template Name: Projets
 * Description: A Page Template with a darker design.
 */

$context = Timber::context();

$args = array(
    'post_type' => 'projects',
    'posts_per_page' => -1,
    'orderby' => array(
        'date' => 'DESC'
    ),
);
$context['projects'] = Timber::get_posts( $args );
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'template-projects.twig' ), $context );