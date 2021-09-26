import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

registerBlockType( 'guten-block-krypte/media', {
	apiVersion: 2,
	title: __( 'Text Media import', 'lakrypte' ),
	description: __(
		'A block with a media import component.'
	),
	category: 'text',
	icon: 'camera',

	attributes: {
		title: {
			source: 'text',
			type: 'string',
			selector: '.title',
		},
		hasTitle: {
			type: 'boolean',
			selector: '.title',
			default: true,
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.content',
		},
		hasContent: {
			type: 'boolean',
			selector: '.content',
			default: true,
		},
		text: {
			type: 'string',
			source: 'text',
			selector: 'a',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		hasButton: {
			type: 'boolean',
			selector: '.btn',
			default: true,
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
