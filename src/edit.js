// External dependencies
import classnames from 'classnames';
import forEach from 'lodash';
import Slider from 'react-slick';

// WordPress dependencies
import { 
	AlignmentToolbar, 
	BlockControls, 
	InspectorControls, 
	useBlockProps
} from '@wordpress/block-editor';
import { 
	PanelBody,
	RadioControl, 
	RangeControl, 
	SelectControl, 
	TextControl, 
	ToolbarButton, 
	ToggleControl, 
	ToolbarGroup
} from '@wordpress/components';
import { 
	__experimentalHeading as Heading,
	__experimentalNumberControl as NumberControl 
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { 
	dateI18n, 
	format, 
	__experimentalGetSettings 
} from '@wordpress/date';
import { 
	Fragment, 
	RawHTML
} from '@wordpress/element';
import { 
	list, 
	grid 
} from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

// Internal dependencies
import icons from './icons';
import { useTaxonomies } from './utils';

// Editor styles
import './editor.scss';

// Editor
export default function Edit( { attributes, setAttributes, clientId } ) {

	// Attributes
	const { 
		layout,
		textAlign,
		numberOfPosts,
		orderBy,
		order,
		columns, 
		displayFeaturedImage,
		displayTitle,
		titleHasHeading,
		titleHeading,
		displayDate,
		displayAuthor, 
		displayExcerpt,
		excerptLength,
		displayContent,
		displayLink,
		linkText,
		displayCarouselDots,
		displayCarouselArrows,
		carouselInfinite,
		carouselSpeed,
		carouselSlidesToShow,
		carouselSlidesToScroll
	} = attributes;
	
	// Block content
	const blockContent = () => {	
		
		// Wrapper 
		const Wrapper = layout === 'carousel' ? 'div' : 'ul';
		const wrapperAttributes = useBlockProps( {
			className: classnames( {
				'is-grid': layout === 'grid',
				[ `columns-${ columns }` ]: layout === 'grid',
				'is-carousel': layout === 'carousel',
				[ `has-text-align-${ textAlign }` ]: textAlign,			
				'has-author': displayAuthor,
				'has-dates': displayDate
			} ),
		} );
		
		// Carousel settings
		var carouselSettings = {
			dots: displayCarouselDots,
			arrows: displayCarouselArrows,
			infinite: carouselInfinite,
			speed: carouselSpeed,
			slidesToShow: carouselSlidesToShow,
			slidesToScroll: carouselSlidesToScroll
		};
		
		// Query
		const query = useSelect( 
			( select ) => {
				return select( 'core' ).getEntityRecords( 
					'postType', 
					'post', {
						'per_page': numberOfPosts,
						'orderby': orderBy,
						'order': order,
						'ignore_sticky_posts': true,
						'no_found_rows': true,
						'_embed': true
					} 
				)
			},
			[
				numberOfPosts,
				orderBy,
				order
			]
		);
		
		// Posts
		const posts = (
			query && query.map( ( post ) => {
				
				// Excerpt
				let excerpt = ( undefined !== post.excerpt && post.excerpt && undefined !== post.excerpt.rendered ? post.excerpt.rendered : '' );
				const excerptElement = document.createElement( 'div' );
				excerptElement.innerHTML = excerpt;
				excerpt = excerptElement.textContent || excerptElement.innerText || '';
				const needsEllipsis = excerptLength < excerpt.trim().split( ' ' ).length && post.excerpt.raw === '';
				const postExcerpt = needsEllipsis ? (
					<>
						{ excerpt
							.trim()
							.split( ' ', excerptLength )
							.join( ' ' ) }
						{ __( '… ', 'posts-block-lite' ) }
					</>
				) : (
					excerpt
				);
				
				// Post
				const Post = layout === 'carousel' ? 'div' : 'li';
				return (
					<Post
						key={ post.id }
						className='wp-block-tt-posts-post'
					>
						{ displayFeaturedImage && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
							<div className='wp-block-tt-posts-post-featured-image'>
								<img 
									src={ post._embedded['wp:featuredmedia'][0].source_url }
									alt={ post._embedded['wp:featuredmedia'][0].alt_text }
								/>
							</div>
						) }
						{ displayTitle && titleHasHeading && (
							<Heading 
								className='wp-block-tt-posts-post-title' 
								level={ titleHeading } 
							>
								<a href={ post.link }>
									<RawHTML>
										{ post.title.rendered }
									</RawHTML>
								</a>
							</Heading>
						) }
						{ displayTitle && !titleHasHeading && (
							<a 
								className='wp-block-tt-posts-post-title'
								href={ post.link }
							>
								<RawHTML>
									{ post.title.rendered }
								</RawHTML>
							</a>
						) }
						{ displayDate || ( displayAuthor && post._embedded && post._embedded.author && post._embedded.author[0] ) ? (
					    	<div className='wp-block-tt-posts-post-meta'>
					    		{ displayDate ? (
									<span className='wp-block-tt-posts-post-meta-date'>
										{ __( 'Posted ', 'posts-block-lite' ) }
										<time
											className='wp-block-tt-posts-post-meta-date-time'
											dateTime={ format( 'c', post.date_gmt ) }
										>
											{ dateI18n( __experimentalGetSettings().formats.date, post.date_gmt ) }{ ' ' }
										</time>
									</span>
					          	) : (
									null
					          	) }
					    		{ displayAuthor && post._embedded && post._embedded.author && post._embedded.author[0] ? (
									<span className='wp-block-tt-posts-post-meta-author'>
										{ __( 'by ', 'posts-block-lite' ) }
										<a 
											className='wp-block-tt-posts-post-meta-author-link'
											href={ post._embedded.author[0].link }
										>
											{ post._embedded.author[0].name }
										</a>
									</span>
					          	) : (
									null
					          	) }
							</div>
					    ) : (
					    	null
					    ) }
						{ displayExcerpt && (
							<div className='wp-block-tt-posts-post-excerpt'>
								{ postExcerpt }
							</div>
						) }						
						{ displayContent && (
							<div
								className='wp-block-tt-posts-post-content'
								dangerouslySetInnerHTML={ {
									__html: post.content.raw.trim(),
								} }
							/>
						) }
						{ displayLink && (
							<p className='wp-block-tt-posts-post-link'>
								<a href={ post.link }>
									{ linkText }
								</a>
							</p>
						) }
					</Post>
				)
			} ) 
		);

		return(		
			<Wrapper { ...wrapperAttributes }>
				{ layout === 'carousel' ? <Slider { ...carouselSettings }>{ posts }</Slider> : posts }
			</Wrapper>
		)
	}

	// Inspector controls
	const inspectorControls = () => {
		
		return(	
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Settings', 'posts-block-lite' ) }>
						<RangeControl
							label={ __( 'Number of posts', 'posts-block-lite' ) }
							value={ numberOfPosts }
							onChange={ ( value ) => setAttributes( { numberOfPosts: value } ) }
							min={ 1 }
							max={ 10 }
						/>
						<SelectControl
							label={ __( 'Order by', 'posts-block-lite' ) }
							value={ orderBy }
							options={ [
								{ label: 'Author', value: 'author' },
								{ label: 'Title', value: 'title' },
								{ label: 'Date', value: 'date' }
							] }
							onChange={ ( value ) => setAttributes( { orderBy: value } ) }
						/>
						<SelectControl
							label={ __( 'Order', 'posts-block-lite' ) }
							value={ order }
							options={ [
								{ label: 'Ascending', value: 'asc' },
								{ label: 'Descending', value: 'desc' }
							] }
							onChange={ ( value ) => setAttributes( { order: value } ) }
						/>
						{ layout === 'grid' && (
							<RangeControl
								label={ __( 'Number of columns', 'posts-block-lite' ) }
								value={ columns }
								onChange={ ( value ) => setAttributes( { columns: value } ) }
								min={ 1 }
								max={ 6 }
								required
							/>
						) }
						<ToggleControl
							label={ __( 'Display featured image', 'posts-block-lite' ) }
							checked={ displayFeaturedImage }
							onChange={ ( value ) => setAttributes( { displayFeaturedImage: value } ) }
						/>
						<ToggleControl
							label={ __( 'Display title', 'posts-block-lite' ) }
							checked={ displayTitle }
							onChange={ ( value ) => setAttributes( { displayTitle: value } ) }
						/>
						{ displayTitle && (
							<ToggleControl
								label={ __( 'Add heading to title', 'posts-block-lite' ) }
								checked={ titleHasHeading }
								onChange={ ( value ) => setAttributes( { titleHasHeading: value } ) }
							/>
						) }
						{ titleHasHeading && (
							<SelectControl
								label={ __( 'Title heading', 'posts-block-lite' ) }
								value={ titleHeading }
								options={ [
									{ label: "Heading 1", value: '1' },
									{ label: "Heading 2", value: '2' },
									{ label: "Heading 3", value: '3' },
									{ label: "Heading 4", value: '4' },
									{ label: "Heading 5", value: '5' },
									{ label: "Heading 6", value: '6' }
								] }
								onChange={ ( value ) => setAttributes( { titleHeading: value } ) }
							/>
						) }
						<ToggleControl
							label={ __( 'Display author', 'posts-block-lite' ) }
							checked={ displayAuthor }
							onChange={ ( value ) => setAttributes( { displayAuthor: value } ) }
						/>
						<ToggleControl
							label={ __( 'Display date', 'posts-block-lite' ) }
							checked={ displayDate }
							onChange={ ( value ) => setAttributes( { displayDate: value } ) }
						/>
						<ToggleControl
							label={ __( 'Display excerpt', 'posts-block-lite' ) }
							checked={ displayExcerpt }
							onChange={ ( value ) => setAttributes( { displayExcerpt: value } ) }
						/>
						{ displayExcerpt && (
							<RangeControl
								label={ __( 'Maximum number of words in excerpt', 'posts-block-lite' ) }
								value={ excerptLength }
								onChange={ ( value ) => setAttributes( { excerptLength: value } ) }
								min={ 10 }
								max={ 100 }
							/>
						) }
						<ToggleControl
							label={ __( 'Display content', 'posts-block-lite' ) }
							checked={ displayContent }
							onChange={ ( value ) => setAttributes( { displayContent: value } ) }
						/>
						<ToggleControl
							label={ __( 'Display link', 'posts-block-lite' ) }
							checked={ displayLink }
							onChange={ ( value ) => setAttributes( { displayLink: value } ) }
						/>
						{ displayLink && (
							<TextControl
								label={ __( 'Link text', 'posts-block-lite' ) }
								value={ linkText }
								onChange={ ( value ) => setAttributes( { linkText: value } ) }
							/>
						) }
					</PanelBody>
					{ layout === 'carousel' && (
						<PanelBody title={ __( 'Carousel', 'posts-block-lite' ) }>	
							<ToggleControl
								label={ __( 'Display dots', 'posts-block-lite'  ) }
								checked={ displayCarouselDots }
								onChange={ ( value ) => setAttributes( { displayCarouselDots: value } ) }
							/>
							<ToggleControl
								label={ __( 'Display arrows', 'posts-block-lite'  ) }
								checked={ displayCarouselArrows }
								onChange={ ( value ) => setAttributes( { displayCarouselArrows: value } ) }
							/>
							<ToggleControl
								label={ __( 'Infinite', 'posts-block-lite' ) }
								checked={ carouselInfinite }
								onChange={ ( value ) => setAttributes( { carouselInfinite: value } ) }
							/>
							<NumberControl
								label={ __( 'Speed', 'posts-block-lite' ) }
								isShiftStepEnabled={ true }
								shiftStep={ 10 }
								value={ carouselSpeed }
								onChange={ ( value ) => setAttributes( { carouselSpeed: value } ) }
							/>
							<RangeControl
								label={ __( 'Slides to show', 'posts-block-lite' ) }
								min={ 1 }
								max={ 10 }
								value={ carouselSlidesToShow }
								onChange={ ( value ) => setAttributes( { carouselSlidesToShow: value } ) }
							/>
							<RangeControl
								label={ __( 'Slides to scroll', 'posts-block-lite' ) }
								min={ 1 }
								max={ 10 }
								value={ carouselSlidesToScroll }
								onChange={ ( value ) => setAttributes( { carouselSlidesToScroll: value } ) }
							/>
						</PanelBody>
					) }
				</InspectorControls>
			</>
		)
	}
	
	// Block controls
	const blockControls = () => {
		return(	
			<BlockControls >
				<ToolbarGroup>
			        <ToolbarButton
			            icon={ icons.list }
						label={ __( 'List view', 'posts-block-lite' ) }
						onClick={ () => setAttributes( { layout: 'list' } ) }
						isActive={ layout === 'list' }
			        />
			        <ToolbarButton
			            icon={ grid }
						label={ __( 'Grid view', 'posts-block-lite' ) }
						onClick={ () => setAttributes( { layout: 'grid' } ) }
						isActive={ layout === 'grid' } 
			        />
					<ToolbarButton
			            icon={ icons.carousel }
						label={ __( 'Carousel view', 'posts-block-lite' ) }
						onClick={ () => setAttributes( { layout: 'carousel' } ) }
						isActive={ layout === 'carousel' } 
			        />
			    </ToolbarGroup>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) => setAttributes( { textAlign: value } ) }
				/>
			</BlockControls>
		)
	}

	return (
		<>
			{ inspectorControls() }
			{ blockControls() }
			{ blockContent() }
		</>
	);
}
