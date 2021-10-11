import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	InspectorControls,
	URLInput,
	MediaUploadCheck, MediaUpload
} from '@wordpress/block-editor'
import { Placeholder, Button, PanelBody, ToggleControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	const onSelectImage1 = picture => {
		props.setAttributes( {
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}
	const onRemoveImage1 = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}

	const onSelectImage2 = picture => {
		props.setAttributes( {
			pictureID2: picture.id,
			pictureURL2: picture.url,
			pictureAlt2: picture.alt,
		})
	}
	const onRemoveImage2 = () => {
		props.setAttributes({
			pictureID2: null,
			pictureURL2: null,
			pictureAlt2: null,
		})
	}

	const onSelectImage3 = picture => {
		props.setAttributes( {
			pictureID3: picture.id,
			pictureURL3: picture.url,
			pictureAlt3: picture.alt,
		})
	}
	const onRemoveImage3 = () => {
		props.setAttributes({
			pictureID3: null,
			pictureURL3: null,
			pictureAlt3: null,
		})
	}

	const onChangeSpotifyUrl = spotify => {
		props.setAttributes( { url: spotify } )
	}

	return (
		<div { ...blockProps } style={{ backgroundColor: props.attributes.backgroundColor }}>
			<InspectorControls>
				<PanelBody title={ __( 'Customize', 'advanced-gutenberg-blocks' ) }>
					<ToggleControl
						label={ __( 'Show Picture 2?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasPicture2 }
						onChange={ () => props.setAttributes( { hasPicture2: ! props.attributes.hasPicture2 } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div className="lakrypte--block--spotify">
				<div className="lakrypte--block--spotify--content">
					<div className="row">
						<div className="col4">
							{ ! props.attributes.pictureID ? (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ onSelectImage1 }
										allowedTypes={ [ 'image' ] }
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
											onClick={ onRemoveImage1 }
											icon="dismiss"
										>
											{ __( 'Remove picture', 'capitainewp-gut-bases' ) }
										</Button>

									) }
								</p>
							) }

							{ props.attributes.hasPicture2 && ! props.attributes.pictureID2 ? (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ onSelectImage2 }
										allowedTypes={ [ 'image' ] }
										value={ props.attributes.pictureID2 }
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
										src={ props.attributes.pictureURL2 }
										alt={ props.attributes.pictureAlt2 }
									/>

									{ props.isSelected && (

										<Button
											className="capitaine-remove-image"
											onClick={ onRemoveImage2 }
											icon="dismiss"
										>
											{ __( 'Remove picture', 'capitainewp-gut-bases' ) }
										</Button>

									) }
								</p>
							) }
						</div>
						<div className="col4">
							{ props.isSelected ? (
								<Fragment>
									URL Spotify
									<URLInput
										value={ props.attributes.url }
										onChange={ onChangeSpotifyUrl }
									/>
								</Fragment>
							) : (
								<iframe className="spotify" src={props.attributes.url} width="100%"
										height="380" frameBorder="0" allowFullScreen=""
										allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
							) }
						</div>
						<div className="col4">
							{ ! props.attributes.pictureID3 ? (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ onSelectImage3 }
										allowedTypes={ [ 'image' ] }
										value={ props.attributes.pictureID3 }
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
										src={ props.attributes.pictureURL3 }
										alt={ props.attributes.pictureAlt3 }
									/>

									{ props.isSelected && (

										<Button
											className="capitaine-remove-image"
											onClick={ onRemoveImage3 }
											icon="dismiss"
										>
											{ __( 'Remove picture', 'capitainewp-gut-bases' ) }
										</Button>

									) }
								</p>
							) }
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
