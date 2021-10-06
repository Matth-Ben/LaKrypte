import { __ } from '@wordpress/i18n'
import {useBlockProps, RichText, InspectorControls, PanelColorSettings, URLInput} from '@wordpress/block-editor'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	const onChangeTitle = title => {
		props.setAttributes( { title: title } )
	}

	const onChangeFacebook = facebook => {
		props.setAttributes( { facebook: facebook } )
	}

	const onChangeInstagram = instagram => {
		props.setAttributes( { instagram: instagram } )
	}

	const onChangeYoutube = youtube => {
		props.setAttributes( { youtube: youtube } )
	}

	const onChangeSpotify = spotify => {
		props.setAttributes( { spotify: spotify } )
	}

	const onChangeSoundCloud = soundcloud => {
		props.setAttributes( { soundcloud: soundcloud } )
	}

	return (
		<div { ...blockProps } style={{ backgroundColor: props.attributes.backgroundColor }}>
			<InspectorControls>
				<PanelBody title={ __( 'Customize', 'advanced-gutenberg-blocks' ) }>
					<ToggleControl
						label={ __( 'Show Facebook?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasFacebook }
						onChange={ () => props.setAttributes( { hasFacebook: ! props.attributes.hasFacebook } ) }
					/>

					<ToggleControl
						label={ __( 'Show Instagram?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasInstagram }
						onChange={ () => props.setAttributes( { hasInstagram: ! props.attributes.hasInstagram } ) }
					/>

					<ToggleControl
						label={ __( 'Show Youtube?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasYoutube }
						onChange={ () => props.setAttributes( { hasYoutube: ! props.attributes.hasYoutube } ) }
					/>

					<ToggleControl
						label={ __( 'Show Spotify?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasSpotify }
						onChange={ () => props.setAttributes( { hasSpotify: ! props.attributes.hasSpotify } ) }
					/>

					<ToggleControl
						label={ __( 'Show SoundCloud?', 'advanced-gutenberg-blocks' ) }
						checked={ props.attributes.hasSoundcloud }
						onChange={ () => props.setAttributes( { hasSoundcloud: ! props.attributes.hasSoundcloud } ) }
					/>

					<PanelColorSettings
						title={ __( 'Colors', 'advanced-gutenberg-blocks' ) }
						colorSettings={ [
							{
								value: props.attributes.backgroundColor,
								onChange: backgroundColor => props.setAttributes( { backgroundColor } ),
								label: __( 'Background color', 'advanced-gutenberg-blocks' ),
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>

			<div className="lakrypte--block--rs">
				<div className="lakrypte--block--rs--content">
					<RichText
						tagName="h2"
						value={ props.attributes.title }
						className='title'
						onChange={ onChangeTitle }
					/>
					<div className="lakrypte--block--rs--content--list">
						{props.attributes.hasFacebook && props.isSelected ? (
							<Fragment>
								URL Facebook
								<URLInput
									value={ props.attributes.facebook }
									onChange={ onChangeFacebook }
								/>
							</Fragment>
						) : (
							<a className="lakrypte--block--rs--content--list--item facebook" href={ props.attributes.facebook }>
								<span className="dashicons dashicons-facebook-alt"></span>
							</a>
						) }
						{props.attributes.hasInstagram && props.isSelected ? (
							<Fragment>
								URL Instagram
								<URLInput
									value={ props.attributes.instagram }
									onChange={ onChangeInstagram }
								/>
							</Fragment>
						) : (
							<a className="lakrypte--block--rs--content--list--item instagram" href={ props.attributes.instagram }>
								<span className="dashicons dashicons-instagram"></span>
							</a>
						) }
						{props.attributes.hasYoutube && props.isSelected ? (
							<Fragment>
								URL Youtube
								<URLInput
									value={ props.attributes.youtube }
									onChange={ onChangeYoutube }
								/>
							</Fragment>
						) : (
							<a className="lakrypte--block--rs--content--list--item youtube" href={ props.attributes.youtube }>
								<span className="dashicons dashicons-youtube"></span>
							</a>
						) }
						{props.attributes.hasSpotify && props.isSelected ? (
							<Fragment>
								URL Youtube
								<URLInput
									value={ props.attributes.spotify }
									onChange={ onChangeSpotify }
								/>
							</Fragment>
						) : (
							<a className="lakrypte--block--rs--content--list--item spotify" href={ props.attributes.spotify }>
								<span className="dashicons dashicons-spotify"></span>
							</a>
						) }
						{props.attributes.hasSoundcloud && props.isSelected ? (
							<Fragment>
								URL Youtube
								<URLInput
									value={ props.attributes.soundcloud }
									onChange={ onChangeSoundCloud }
								/>
							</Fragment>
						) : (
							<a className="lakrypte--block--rs--content--list--item soundcloud" href={ props.attributes.soundcloud }>
								<span className="dashicons dashicons-soundcloud"></span>
							</a>
						) }
					</div>
				</div>
			</div>
		</div>
	)
}
