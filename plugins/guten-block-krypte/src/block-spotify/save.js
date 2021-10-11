import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		<div { ...blockProps }>
			<div className="lakrypte--block--spotify">
				<div className="lakrypte--block--spotify--content">
					{props.attributes.pictureID && (
						<img className="lakrypte--block--text--media--background" src={ props.attributes.pictureURL } alt={ props.attributes.pictureAlt } />
					)}
					{props.attributes.hasPicture2 && props.attributes.pictureID2 && (
						<img className="lakrypte--block--text--media--background" src={ props.attributes.pictureURL2 } alt={ props.attributes.pictureAlt2 } />
					)}
					<div className="lakrypte--block--text--media--content">
						{props.attributes.url && (
							<iframe className="spotify" src={props.attributes.url} width="100%"
	height="380" frameBorder="0" allowFullScreen=""
	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
