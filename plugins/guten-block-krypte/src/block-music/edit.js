import { __ } from '@wordpress/i18n'
import { useBlockProps, MediaUpload, MediaUploadCheck, RichText, URLInput, InspectorControls } from '@wordpress/block-editor'
import { Placeholder, Button, TextControl, PanelBody, ToggleControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// Attribution des informations de l'image
	const onSelectImage = picture => {

		console.log(picture) // Afficher les informations récupérées de l'image

		props.setAttributes( {
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}

	// Effacement des données de l'image
	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}

	const onChangeContent = content => {
		props.setAttributes( { content: content } )
	}

	const onChangeTitle = title => {
		props.setAttributes( { title: title } )
	}

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Customize', 'advanced-gutenberg-blocks' ) }>
					<ToggleControl
						label={ __( 'Show Title?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasTitle }
						onChange={ () => props.setAttributes( { hasTitle: ! props.attributes.hasTitle } ) }
					/>

					<ToggleControl
						label={ __( 'Show Content?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasContent }
						onChange={ () => props.setAttributes( { hasContent: ! props.attributes.hasContent } ) }
					/>

					<ToggleControl
						label={ __( 'Show Button?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasButton }
						onChange={ () => props.setAttributes( { hasButton: ! props.attributes.hasButton } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div>
			{props.attributes.hasTitle && (
				<RichText
					tagName="h2"
					value={ props.attributes.title }
					className='title'
					onChange={ onChangeTitle }
				/>
			)}
			{props.attributes.hasContent && (
				<RichText
					tagName="p"
					value={ props.attributes.content }
					className="content"
					onChange={ onChangeContent }
				/>
			)}
			{props.attributes.hasButton && props.isSelected ? (
				<Fragment>
					<TextControl
						placeholder={ __( 'Link Label', 'capitainewp-gut-bases' ) }
						value={ props.attributes.text }
						onChange={ text => props.setAttributes( { text } ) }
					/>

					<URLInput
						value={ props.attributes.url }
						onChange={ (url, post) => props.setAttributes( { url, text: (post && post.title) || props.attributes.text  } ) }
					/>
				</Fragment>
			) : (
				<p>
					<a href={ props.attributes.url }>
						{ props.attributes.text || __( 'Edit link',  'capitainewp-gut-bases' ) }
					</a>
				</p>
			) }
			</div>
			<div>
			{ ! props.attributes.pictureID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes={ [ 'audio' ] }
						value={ props.attributes.pictureID }
						render={ ( { open } ) => (
							<Placeholder
								icon="images-alt"
								label={ __( 'Photo', 'capitainewp-gut-bases' ) }
								instructions={ __( 'Select a picture', 'capitainewp-gut-bases' ) }
							>
								<Button
									isSecondary
									isLarge
									onClick={ open }
									icon="upload"
								>
									{ __( 'Import', 'capitainewp-gut-bases' ) }
								</Button>
							</Placeholder>
						) }
					/>
				</MediaUploadCheck>

			) : (

				<p className="capitaine-image-wrapper">
					<img
						src={ props.attributes.pictureURL }
						alt={ props.attributes.pictureAlt }
					/>

					{ props.isSelected && (

						<Button
							className="capitaine-remove-image"
							onClick={ onRemoveImage }
							icon="dismiss"
						>
							{ __( 'Remove picture', 'capitainewp-gut-bases' ) }
						</Button>

					) }
				</p>
			) }
			</div>
		</div>

	)
}
