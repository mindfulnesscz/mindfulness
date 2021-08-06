/*jshint esversion: 6 */

const { registerBlockType} = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { TextControl, PanelBody, PanelRow, } = wp.components;
const { Fragment } = wp.element;

const block = registerBlockType('mindfulness-blocks/ess-button', {
    title: 'Ess Button',
    icon: 'format-image',
    category: 'layout',

    attributes: {
        button_text: {
            type: 'text',
            default: 'see more'
        },
    },

    edit(props) {

        const { setAttributes, attributes, className } = props;
        const { button_text } = attributes;

        return ([
            <Fragment>
                <InspectorControls>
                    <PanelBody title={'Ess Button Settings'} initalOpen={true}>
                        <PanelRow>
                            <TextControl
                                label="Button Text"
                                value={ button_text }
                                onChange = { 
                                    ( value ) => {
                                        setAttributes( { button_text: value } );
                                    }
                                }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>,

            <div className = { className, 'ess-button' }>
                <span>{ button_text }</span> 
            </div>
        ]);

    },

    save(props) {

        const { attributes, className} = props;
        const { button_text } = attributes;

        return (
            <div className =  { className, 'ess-button'}>
                <span>{ button_text }</span>
            </div>
        );
    }
});

export {block}