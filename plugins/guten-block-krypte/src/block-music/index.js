import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

registerBlockType( 'guten-block-krypte/block-music', {
	apiVersion: 2,
	title: __( 'BLock Music', 'lakrypte' ),
	description: __(
		'A block with a media import component.'
	),
	category: 'text',
	icon: 'playlist-audio',

	attributes: {
		title: {
			source: 'text',
			type: 'string',
			selector: '.title',
		},
		pictureID: { // L'identifiant de l'image
			type: 'number',
			default: null,
		},
		pictureURL: { // L'URL de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		pictureAlt: { // Le texte alternatif de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
	},
	edit: Edit,
	save,
} )
