<?php

add_action( 'init', 'cpt_project', 0 );
function cpt_project() {
    $labels = array(
        'name'                => _x( 'Projets', 'Post Type General Name'),
        'singular_name'       => _x( 'Projet', 'Post Type Singular Name'),
        'menu_name'           => __( 'Projets'),
        'all_items'           => __( 'Tous les projets'),
        'view_item'           => __( 'Voir les projets'),
        'add_new_item'        => __( 'Ajouter un nouveau projet'),
        'add_new'             => __( 'Ajouter'),
        'edit_item'           => __( 'Editer le projet'),
        'update_item'         => __( 'Modifier le projet'),
        'search_items'        => __( 'Rechercher un projet'),
        'not_found'           => __( 'Non trouvé'),
        'not_found_in_trash'  => __( 'Non trouvé dans la corbeille'),
    );

    $args = array(
        'label'               => __( 'Projets'),
        'description'         => __( 'Tous sur projects'),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', ),
        'show_in_rest'        => true,
        'hierarchical'        => false,
        'public'              => true,
        'has_archive'         => true,
        'rewrite'			  => array( 'slug' => 'projects'),
    );
    register_post_type( 'projects', $args );
}