import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		<div { ...blockProps } style={{ backgroundColor: props.attributes.backgroundColor }}>
			<div className="lakrypte--block--rs">
				<div className="lakrypte--block--rs--content">
					<RichText.Content
						tagName="h2"
						className="title"
						value={ props.attributes.title }
					/>
					<div className="lakrypte--block--rs--content--list">
						{props.attributes.hasFacebook && (
							<a className="lakrypte--block--rs--content--list--item facebook" href={ props.attributes.facebook }>
								<span className="dashicons dashicons-facebook-alt"></span>
							</a>
						)}
						{props.attributes.hasInstagram && (
							<a className="lakrypte--block--rs--content--list--item instagram" href={ props.attributes.instagram }>
								<span className="dashicons dashicons-instagram"></span>
							</a>
						)}
						{props.attributes.hasYoutube && (
							<a className="lakrypte--block--rs--content--list--item youtube" href={ props.attributes.youtube }>
								<span className="dashicons dashicons-youtube"></span>
							</a>
						)}
						{props.attributes.hasSpotify && (
							<a className="lakrypte--block--rs--content--list--item spotify" href={ props.attributes.spotify }>
								<span className="dashicons dashicons-spotify"></span>
							</a>
						)}
						{props.attributes.hasSoundcloud && (
							<a className="lakrypte--block--rs--content--list--item soundcloud" href={ props.attributes.soundcloud }>
								<span className="dashicons dashicons-soundcloud"></span>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
