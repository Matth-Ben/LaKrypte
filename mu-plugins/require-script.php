<?php
/*
MU Plugin: Require Script
Description: Importer le script
Version1: 21 09 2021
*/

wp_enqueue_script( 'lakrypte-script', get_template_directory_uri() . '/public/js/index.js', array(), '1.0.0', true);
?>