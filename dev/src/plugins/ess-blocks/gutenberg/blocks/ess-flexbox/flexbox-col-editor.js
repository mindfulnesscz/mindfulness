/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/*jshint esversion: 6 */
import { SelectControl } from '@wordpress/components';

const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { TextControl, PanelBody, PanelRow } = wp.components;
const { Fragment } = wp.element;

function resize_column_parent( id, values ) {
	const div = document.getElementById( 'block-' + id );
	if ( div ) {
		switch ( values[ 3 ] ) {
			case '12':
				div.style.width = '100%';
				break;
			case '10':
				div.style.width = '83.333%';
				break;
			case '8':
				div.style.width = '66.667%';
				break;
			case '6':
				div.style.width = '50%';
				break;
			case '4':
				div.style.width = '33.333%';
				break;
			case '3':
				div.style.width = '25%';
				break;
			case '2':
				div.style.width = '16.667%';
				break;
		}

		/*div.classList.remove('col-xs-12', 'col-xs-10', 'col-xs-8', 'col-xs-6', 'col-xs-4','col-xs-2');
        div.classList.remove('col-sm-12', 'col-sm-10', 'col-sm-8', 'col-sm-6', 'col-sm-4','col-sm-2');
        div.classList.remove('col-md-12', 'col-md-10', 'col-md-8', 'col-md-6', 'col-md-4','col-md-2');
        div.classList.remove('col-lg-12', 'col-lg-10', 'col-lg-8', 'col-lg-6', 'col-lg-4','col-lg-2');*/

		//applyClass(div, values);
	} else {
		setTimeout( () => {
			resize_column_parent( id, values );
		}, 100 );
	}
}
function applyClass( element, values ) {
	element.classList.add(
		'col-xs-' + values[ 0 ],
		'col-sm-' + values[ 1 ],
		'col-md-' + values[ 2 ],
		'col-lg-' + values[ 3 ]
	);
}

const block = registerBlockType( 'mindfulness-blocks/flexbox-col', {
	title: 'Column',
	icon: 'format-image',
	category: 'layout',

	attributes: {
		colClass: {
			type: 'text',
			default: '',
		},
		col_xs: {
			type: 'text',
			default: '12',
		},
		col_sm: {
			type: 'text',
			default: '12',
		},
		col_md: {
			type: 'text',
			default: '6',
		},
		col_lg: {
			type: 'text',
			default: '4',
		},
	},

	edit( props ) {
		const { setAttributes, attributes, className, clientId } = props;
		const { colClass, col_xs, col_sm, col_md, col_lg } = attributes;

		resize_column_parent( clientId, [ col_xs, col_sm, col_md, col_lg ] );

		return [
			<Fragment key="column-key">
				<InspectorControls>
					<PanelBody title={ 'Column settings' } initalOpen={ true }>
						<PanelRow>
							<SelectControl
								label={ 'Col XS' }
								options={ [
									{ label: '12', value: '12' },
									{ label: '10', value: '10' },
									{ label: '8', value: '8' },
									{ label: '6', value: '6' },
									{ label: '4', value: '4' },
									{ label: '3', value: '3' },
									{ label: '2', value: '2' },
								] }
								onChange={ ( value ) => {
									setAttributes( { col_xs: value } );
									//resize_column_parent(clientId, [col_xs, col_sm, col_md, col_lg]);
								} }
								value={ attributes.col_xs }
							></SelectControl>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ 'Col SM' }
								options={ [
									{ label: '12', value: '12' },
									{ label: '10', value: '10' },
									{ label: '8', value: '8' },
									{ label: '6', value: '6' },
									{ label: '4', value: '4' },
									{ label: '3', value: '3' },
									{ label: '2', value: '2' },
								] }
								onChange={ ( value ) => {
									setAttributes( { col_sm: value } );
									//resize_column_parent(clientId, [col_xs, col_sm, col_md, col_lg]);
								} }
								value={ attributes.col_sm }
							></SelectControl>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ 'Col MD' }
								options={ [
									{ label: '12', value: '12' },
									{ label: '10', value: '10' },
									{ label: '8', value: '8' },
									{ label: '6', value: '6' },
									{ label: '4', value: '4' },
									{ label: '3', value: '3' },
									{ label: '2', value: '2' },
								] }
								onChange={ ( value ) => {
									setAttributes( { col_md: value } );
									//resize_column_parent(clientId, [col_xs, col_sm, col_md, col_lg]);
								} }
								value={ attributes.col_md }
							></SelectControl>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ 'Col LG' }
								options={ [
									{ label: '12', value: '12' },
									{ label: '10', value: '10' },
									{ label: '8', value: '8' },
									{ label: '6', value: '6' },
									{ label: '4', value: '4' },
									{ label: '3', value: '3' },
									{ label: '2', value: '2' },
								] }
								onChange={ ( value ) => {
									setAttributes( { col_lg: value } );
									//resize_column_parent(clientId, [col_xs, col_sm, col_md, value]);
								} }
								value={ attributes.col_lg }
							></SelectControl>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Col Additional Class"
								value={ colClass }
								onChange={ ( value ) => {
									setAttributes( { colClass: value } );
								} }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</Fragment>,

			<div key="ess-col" className={ ( className, 'mindfulness-wp-block' ) }>
				<InnerBlocks />
			</div>,
		];
	},

	save( props ) {
		const { attributes, className } = props;
		const { col_xs, col_sm, col_md, col_lg } = attributes;

		return (
			<div
				className={
					( className,
					( function () {
						let colClass = '';
						colClass += 'col-xs-' + col_xs + ' ';
						colClass += 'col-sm-' + col_sm + ' ';
						colClass += 'col-md-' + col_md + ' ';
						colClass += 'col-lg-' + col_lg + ' ';

						return colClass;
					} )() )
				}
			>
				<InnerBlocks.Content />
			</div>
		);
	},
} );

export { block };
