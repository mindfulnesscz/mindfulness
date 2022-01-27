/* eslint-disable prettier/prettier */
/*jshint esversion: 6 */

import icons from '../../../utils/icons';
import { React } from 'react';

const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
	withColors,
} = wp.blockEditor;

const { PanelBody, PanelRow } = wp.components;
const { Fragment } = wp.element;


const block = registerBlockType( 'mindfulness-blocks/ess-card', {
	title: 'Ess Card',
	icon: icons.card,
	category: 'layout',
	attributes: {
		headerType: {
			type: 'string',
			default: 'fullsize',
		},

		backgroundColor: {
			type: 'string',
			default: 'essblue',
		},
	},

	edit: withColors( 'backgroundColor' )( ( props ) => {
		const {
			backgroundColor,
			setBackgroundColor,
		} = props;



		return [
			<Fragment key="card-fragment">
				<InspectorControls>
					<PanelBody title={ 'Card Settings' } initalOpen={ true }>
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
					</PanelBody>
				</InspectorControls>
			</Fragment>,

			<div
				key="ess-card-key"
				id="ess-card"
				className= { 'card-holder' }
			>
				<div className={ 'card' + ' ' + 'has-' + backgroundColor.slug + '-background-color' }>
					<div className={ 'card-content' }>
						<InnerBlocks />
					</div>
				</div>
			</div>,
		];
	} ),

	save( props ) {
		const { attributes } = props;

		const {
			backgroundColor,
		} = attributes;


		return (
			<div
				key="ess-card-key"
				id="ess-card"
				className= { 'card-holder' }
			>
				<div className={ 'card' + ' ' + 'has-' + backgroundColor + '-background-color' }>
					<div className={ 'card-content' }>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
} );
export { block };
