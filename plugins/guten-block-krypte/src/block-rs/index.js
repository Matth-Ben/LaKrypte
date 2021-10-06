import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

registerBlockType( 'guten-block-krypte/block-rs', {
	apiVersion: 2,
	title: __( 'RS LaKrypte', 'lakrypte' ),
	description: __(
		'A block with a media import component.'
	),
	category: 'text',
	icon: 'share',
	attributes: {
		title: {
			source: 'text',
			type: 'string',
			selector: '.title',
		},
		backgroundColor: {
			type: 'string',
		},
		hasFacebook: {
			type: 'boolean',
			selector: '.facebook',
			default: true,
		},
		facebook: {
			type: 'string',
			source: 'attribute',
			selector: '.facebook',
			attribute: 'href',
		},
		hasInstagram: {
			type: 'boolean',
			selector: '.instagram',
			default: true,
		},
		instagram: {
			type: 'string',
			source: 'attribute',
			selector: '.instagram',
			attribute: 'href',
		},
		hasYoutube: {
			type: 'boolean',
			selector: '.youtube',
			default: true,
		},
		youtube: {
			type: 'string',
			source: 'attribute',
			selector: '.youtube',
			attribute: 'href',
		},
		hasSpotify: {
			type: 'boolean',
			selector: '.spotify',
			default: true,
		},
		spotify: {
			type: 'string',
			source: 'attribute',
			selector: '.spotify',
			attribute: 'href',
		},
		hasSoundcloud: {
			type: 'boolean',
			selector: '.soundcloud',
			default: true,
		},
		soundcloud: {
			type: 'string',
			source: 'attribute',
			selector: '.soundcloud',
			attribute: 'href',
		},
	},
	edit: Edit,
	save,
} )
