import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
		props.attributes.pictureID && (
			<div { ...blockProps }>
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
					<a href={ props.attributes.url }>
						{ props.attributes.text }
					</a>
				)}
				<img src={ props.attributes.pictureURL } alt={ props.attributes.pictureAlt } />
			</div>
		)
	)
}
