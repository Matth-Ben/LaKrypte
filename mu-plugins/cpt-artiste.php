<?php

add_action( 'init', 'cpt_artiste', 0 );
function cpt_artiste() {
    $labels = array(
        'name'                => _x( 'Artistes', 'Post Type General Name'),
        'singular_name'       => _x( 'Artiste', 'Post Type Singular Name'),
        'menu_name'           => __( 'Artistes'),
        'all_items'           => __( 'Tous les artistes'),
        'view_item'           => __( 'Voir les artistes'),
        'add_new_item'        => __( 'Ajouter un nouvel artiste'),
        'add_new'             => __( 'Ajouter'),
        'edit_item'           => __( 'Editer l\'artistes'),
        'update_item'         => __( 'Modifier l\'artistes'),
        'search_items'        => __( 'Rechercher un artiste'),
        'not_found'           => __( 'Non trouvé'),
        'not_found_in_trash'  => __( 'Non trouvé dans la corbeille'),
    );

    $args = array(
        'label'               => __( 'Artistes'),
        'description'         => __( 'Tous sur artistes'),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', ),
        'show_in_rest' => true,
        'hierarchical'        => false,
        'public'              => true,
        'has_archive'         => true,
        'rewrite'			  => array( 'slug' => 'artistes'),

    );
    register_post_type( 'artistes', $args );
}

add_action( 'init', 'taxonomies_artiste', 0 );
function taxonomies_artiste() {
    $labels_genre = array(
        'name'              			=> _x( 'Genres', 'taxonomy general name'),
        'singular_name'     			=> _x( 'Genre', 'taxonomy singular name'),
        'search_items'      			=> __( 'Chercher un genre'),
        'all_items'        				=> __( 'Tous les genres'),
        'edit_item'         			=> __( 'Editer le genre'),
        'update_item'       			=> __( 'Mettre à jour le genre'),
        'add_new_item'     				=> __( 'Ajouter un nouveau genre'),
        'new_item_name'     			=> __( 'Valeur du nouveau genre'),
        'separate_items_with_commas'	=> __( 'Séparer les genres avec une virgule'),
        'menu_name'         => __( 'Genre'),
    );

    $args_genre = array(
        'hierarchical'      => false,
        'labels'            => $labels_genre,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'genres' ),
    );
    register_taxonomy( 'genres', 'artistes', $args_genre );
}