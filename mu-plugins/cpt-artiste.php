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

    // On peut définir ici d'autres options pour notre custom post type
    $args = array(
        'label'               => __( 'Artistes'),
        'description'         => __( 'Tous sur artistes'),
        'labels'              => $labels,
        // On définit les options disponibles dans l'éditeur de notre custom post type ( un titre, un auteur...)
        'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', ),
        /*
        * Différentes options supplémentaires
        */
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
    $labels_annee = array(
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

    $args_annee = array(
        'hierarchical'      => false,
        'labels'            => $labels_annee,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'genres' ),
    );
    register_taxonomy( 'gernes', 'artistes', $args_annee );

    $labels_realisateurs = array(
        'name'                       => _x( 'Réalisateurs', 'taxonomy general name'),
        'singular_name'              => _x( 'Réalisateur', 'taxonomy singular name'),
        'search_items'               => __( 'Rechercher un réalisateur'),
        'popular_items'              => __( 'Réalisateurs populaires'),
        'all_items'                  => __( 'Tous les réalisateurs'),
        'edit_item'                  => __( 'Editer un réalisateur'),
        'update_item'                => __( 'Mettre à jour un réalisateur'),
        'add_new_item'               => __( 'Ajouter un nouveau réalisateur'),
        'new_item_name'              => __( 'Nom du nouveau réalisateur'),
        'separate_items_with_commas' => __( 'Séparer les réalisateurs avec une virgule'),
        'add_or_remove_items'        => __( 'Ajouter ou supprimer un réalisateur'),
        'choose_from_most_used'      => __( 'Choisir parmi les plus utilisés'),
        'not_found'                  => __( 'Pas de réalisateurs trouvés'),
        'menu_name'                  => __( 'Réalisateurs'),
    );

    $args_realisateurs = array(
        'hierarchical'          => false,
        'labels'                => $labels_realisateurs,
        'show_ui'               => true,
        'show_in_rest'			=> true,
        'show_admin_column'     => true,
        'update_count_callback' => '_update_post_term_count',
        'query_var'             => true,
        'rewrite'               => array( 'slug' => 'realisateurs' ),
    );
    register_taxonomy( 'realisateurs', 'seriestv', $args_realisateurs );

    // Catégorie de série

    $labels_cat_serie = array(
        'name'                       => _x( 'Catégories de série', 'taxonomy general name'),
        'singular_name'              => _x( 'Catégories de série', 'taxonomy singular name'),
        'search_items'               => __( 'Rechercher une catégorie'),
        'popular_items'              => __( 'Catégories populaires'),
        'all_items'                  => __( 'Toutes les catégories'),
        'edit_item'                  => __( 'Editer une catégorie'),
        'update_item'                => __( 'Mettre à jour une catégorie'),
        'add_new_item'               => __( 'Ajouter une nouvelle catégorie'),
        'new_item_name'              => __( 'Nom de la nouvelle catégorie'),
        'add_or_remove_items'        => __( 'Ajouter ou supprimer une catégorie'),
        'choose_from_most_used'      => __( 'Choisir parmi les catégories les plus utilisées'),
        'not_found'                  => __( 'Pas de catégories trouvées'),
        'menu_name'                  => __( 'Catégories de série'),
    );

    $args_cat_serie = array(
        // Si 'hierarchical' est défini à true, notre taxonomie se comportera comme une catégorie standard
        'hierarchical'          => true,
        'labels'                => $labels_cat_serie,
        'show_ui'               => true,
        'show_in_rest'			=> true,
        'show_admin_column'     => true,
        'query_var'             => true,
        'rewrite'               => array( 'slug' => 'categories-series' ),
    );

    register_taxonomy( 'categoriesseries', 'seriestv', $args_cat_serie );
}