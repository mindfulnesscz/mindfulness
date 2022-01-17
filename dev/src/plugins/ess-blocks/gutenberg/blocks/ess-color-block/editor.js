/* eslint-disable prettier/prettier */
/*jshint esversion: 6 */

import EssColors from '../../../libs/colors';

const { registerBlockType } = wp.blocks;

const {
	InspectorControls,

	PanelColorSettings,

	InnerBlocks,

	withColors,

	getColorClassName,
} = wp.blockEditor;

const { PanelBody, PanelRow, SelectControl } = wp.components;

const { Fragment } = wp.element;

const block = registerBlockType( 'mindfulness-blocks/color-block', {
	title: 'Color Block',

	icon: 'format-image',

	category: 'layout',

	attributes: {
		backgroundColor: {
			type: 'string',

			default: 'essblue',
		},

		opacity: {
			type: 'string',

			default: 'opacity-full',
		},
	},

	edit: withColors( 'backgroundColor' )( ( props ) => {
		const {
			setAttributes,

			attributes,

			backgroundColor,

			setBackgroundColor,
		} = props;

		const { opacity, className } = attributes;

		const headerClasses = (
			'ess-color-block-bkg' +
			' ' +
			opacity +
			' ' +
			( backgroundColor.class || '' )
		).trim();

		return [
			<Fragment key="dfgdf">
				<InspectorControls>
					<PanelBody title={ 'Header Settings' } initalOpen={ true }>
						<PanelRow>
							<PanelColorSettings
								title={ 'Choose Color' }
								colorSettings={ [
									{
										value: backgroundColor.color,

										onChange: setBackgroundColor,

										label: 'Background Color',
									},
								] }
							></PanelColorSettings>
						</PanelRow>

						<PanelRow>
							<SelectControl
								label={ 'Background opacity' }
								options={ [
									{ label: 'full', value: 'opacity-full' },

									{ label: 'heavy', value: 'opacity-heavy' },

									{
										label: 'Medium',

										value: 'opacity-medium',
									},

									{ label: 'light', value: 'opacity-light' },

									{
										label: 'offwhite',

										value: 'opacity-offwhite',
									},
								] }
								onChange={ ( value ) => {
									setAttributes( { opacity: value } );
								} }
								value={ opacity }
							></SelectControl>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</Fragment>,

			<div key="sdfsdf"
				className={ ( function () {
					return className + ' mindfulness-wp-block ess-color-block ';
				} )() }
			>
				<div className={ headerClasses }></div>

				<InnerBlocks />
			</div>,
		];
	} ),

	save( props ) {
		const { attributes, className } = props;

		const { backgroundClass, opacity, backgroundColor } = attributes;

		const colorBlockClasses = (
			'ess-color-block-bkg' +
			' ' +
			opacity +
			' ' +
			( getColorClassName( 'background-color', backgroundColor ) || '' )
		).trim();

		return (
			<div
				className={
					( className,
					( function () {
						return 'mindfulness-wp-block ess-color-block';
					} )() )
				}
			>
				<div className={ colorBlockClasses }></div>

				<InnerBlocks.Content />
			</div>
		);
	},
} );

export { block };
