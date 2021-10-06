import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		props.attributes.pictureID && (
			<div { ...blockProps }>
				<div className="lakrypte--block--text--media">
					<img className="lakrypte--block--text--media--background" src={ props.attributes.pictureURL } alt={ props.attributes.pictureAlt } />
					<div className="lakrypte--block--text--media--content">
						{props.attributes.hasTitle && (
							<RichText.Content
								tagName="h2"
								className="title"
								value={ props.attributes.title }
							/>
						)}
						{props.attributes.hasContent && (
							<RichText.Content
								tagName="p"
								className="content"
								value={ props.attributes.content }
							/>
						)}
						{props.attributes.hasButton && (
							<a className="btn" href={ props.attributes.url }>
								<hr className="btn--dash"/>{ props.attributes.text }
							</a>
						)}
					</div>
				</div>
			</div>
		)
	)
}
