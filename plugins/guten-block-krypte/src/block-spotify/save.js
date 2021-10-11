import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		<div { ...blockProps }>
			<div className="lakrypte--block--spotify">
				<div className="lakrypte--block--spotify--content">
					<div className="row">
						<div className="col4">
							{props.attributes.pictureID && (
								<img className="lakrypte--block--spotify--content--media picture-1" src={ props.attributes.pictureURL } alt={ props.attributes.pictureAlt } />
							)}
							{props.attributes.hasPicture2 && props.attributes.pictureID2 && (
								<img className="lakrypte--block--spotify--content--media picture-2" src={ props.attributes.pictureURL2 } alt={ props.attributes.pictureAlt2 } />
							)}
						</div>
						<div className="col4">
							{props.attributes.url && (
								<iframe className="lakrypte--block--spotify--content--spotify" src={props.attributes.url} width="100%"
										height="380" frameBorder="0" allowFullScreen=""
										allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
							)}
						</div>
						<div className="col4">
							<div className="lakrypte--block--spotify--content--background">
								{props.attributes.pictureID3 && (
									<img className="lakrypte--block--spotify--content--background--media picture-3" src={ props.attributes.pictureURL3 } alt={ props.attributes.pictureAlt3 } />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
