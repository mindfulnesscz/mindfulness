/* eslint-disable prettier/prettier */
/*jshint esversion: 6 */
import EssImageSrcset from '../../../libs/image-src-set';

import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/compose';

const { registerBlockType } = wp.blocks;
const {
	MediaUpload,
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
	withColors,
	getColorClassName,
} = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
const { Fragment } = wp.element;
const el = wp.element.CreateElement;

const block = registerBlockType( 'mindfulness-blocks/keypage-header', {
	title: 'Keypage Header',
	icon: 'format-image',
	category: 'layout',

	attributes: {
		headerType: {
			type: 'string',
			default: 'fullsize',
		},
		illustration_arr: {
			type: 'array',
			default: [],
		},
		illustration: {
			type: 'string',
			default: '',
		},
		illustration_srcset: {
			type: 'string',
			default: '',
		},
		illustration_sizes: {
			type: 'string',
			default: '',
		},
		backgroundColor: {
			type: 'string',
			default: 'essblue',
		},
	},

	edit: withColors( 'backgroundColor' )( ( props ) => {
		const {
			setAttributes,
			attributes,
			backgroundColor,
			setBackgroundColor,
		} = props;
		const { headerType, illustration } = attributes;

		const headerClasses = (
			'mindfulness-wp-block ' +
			headerType +
			' ' +
			( backgroundColor.class || '' )
		).trim();

		function onHeadlineChange( changes ) {
			setAttributes( {
				headlineText: changes,
			} );
		}

		function onCopyChange( changes ) {
			setAttributes( {
				copyText: changes,
			} );
		}

		function selectImage( imageObject ) {
			EssImageSrcset.ess_get_image_srcset( imageObject.sizes );

			const img_arr = EssImageSrcset.ess_get_image_srcset(
				imageObject.sizes
			);

			const sizes =
				'(min-width: 760px) calc((100vw/2.5)*' +
				img_arr[ 2 ] +
				'), (min-width: 561px) calc(100vw/2), 280px';

			setAttributes( {
				illustration_arr: EssImageSrcset.ess_get_image_srcset(
					imageObject.sizes
				),
				illustration: img_arr[ 0 ],
				illustration_srcset: img_arr[ 1 ],
				illustration_sizes: sizes,
			} );
		}

		return [
			<Fragment>
				<InspectorControls>
					<PanelBody title={ 'Header Settings' } initalOpen={ true }>
						<PanelRow>
							<SelectControl
								label={ 'Header Size' }
								options={ [
									{ label: 'Full Size', value: 'fullsize' },
									{ label: 'Half Size', value: 'halfsize' },
									{ label: 'Basic', value: 'basic' },
								] }
								onChange={ ( value ) => {
									setAttributes( { headerType: value } );
								} }
								value={ attributes.headerType }
							></SelectControl>
						</PanelRow>

						<PanelRow>
							<PanelColorSettings
								title={ 'Choose Color' }
								colorSettings={ [
									{
										value: backgroundColor.color,

										onChange: setBackgroundColor,

										label: 'Background Color',

										//colors: EssColors.ess_get_colors() // from libs/colors.js
									},
								] }
							></PanelColorSettings>
						</PanelRow>

						<PanelRow>
							<h2>Choose main Image</h2>
							<MediaUpload
								onSelect={ selectImage }
								type="image"
								value={ illustration }
								render={ ( { open } ) => (
									<button
										onClick={ open }
										className="components-button editor-post-featured-image__toggle"
									>
										Background Image:
									</button>
								) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</Fragment>,

			<header id="ess-header" className={ headerClasses }>
				<div className="ess-keypage-header">
					<div className={ 'ess-keypage-header-content-holder' }>
						<InnerBlocks />
					</div>

					<img
						src={ ( function () {
							return illustration;
						} )() }
					></img>
				</div>
			</header>,
		];
	} ),

	save( props ) {
		const { attributes } = props;
		const {
			illustration,
			illustration_srcset,
			illustration_arr,
			illustration_sizes,
			headerType,
			backgroundColor,
		} = attributes;

		const headerClasses = (
			'mindfulness-wp-block ' +
			headerType +
			' ' +
			( getColorClassName( 'background-color', backgroundColor ) || '' )
		).trim();

		return (
			<header id="ess-header" className={ headerClasses }>
				<div className="ess-keypage-header">
					<div className={ 'ess-keypage-header-content-holder' }>
						<InnerBlocks.Content />
					</div>

					<img
						src={ illustration }
						srcSet={ illustration_srcset }
						sizes={ illustration_sizes }
					></img>
				</div>
			</header>
		);
	},
} );

export { block };
