import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

registerBlockType( 'guten-block-krypte/block-spotify', {
	apiVersion: 2,
	title: __( 'Block Spotify', 'lakrypte' ),
	description: __(
		'A block with a media import component.'
	),
	category: 'embed',
	icon: 'spotify',
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: '.spotify',
			attribute: 'src',
		},
		pictureID: { // L'identifiant de l'image
			type: 'number',
			default: null,
		},
		pictureURL: { // L'URL de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.picture-1',
		},
		pictureAlt: { // Le texte alternatif de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.picture-1',
		},
		hasPicture2: {
			type: 'boolean',
			selector: '.picture-2',
			default: true,
		},
		pictureID2: { // L'identifiant de l'image
			type: 'number',
			default: null,
		},
		pictureURL2: { // L'URL de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.picture-2',
		},
		pictureAlt2: { // Le texte alternatif de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.picture-2',
		},
	},
	edit: Edit,
	save,
} )
