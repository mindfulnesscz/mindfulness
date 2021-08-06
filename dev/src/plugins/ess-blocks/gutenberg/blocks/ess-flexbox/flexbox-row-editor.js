/*jshint esversion: 6 */

const { registerBlockType} = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { TextControl, PanelBody, PanelRow } = wp.components;
const { Fragment } = wp.element;


const block = registerBlockType('wm-blocks/flexbox-row', {
    title: 'Row Container',
    icon: 'format-image',
    category: 'layout',

    attributes: {
        row_class: {
            type: 'text',
            default: ''
        },
        colSpecs: {
            type: 'array',
            default: [],
        }
    },

    edit(props) {

        const { setAttributes, attributes, className} = props;
        const { row_class } = attributes;

        

        return ([
            <Fragment>
                <InspectorControls>
                    <PanelBody title={'Header Settings'} initalOpen={true}>
                        <PanelRow>
                            <TextControl
                                label="Row CSS Classes"
                                value={ row_class }
                                onChange = { 
                                    ( value ) => {
                                        setAttributes( { row_class: value } );
                                    }
                                }
                            />
                        </PanelRow>
                    </PanelBody>
                    
                </InspectorControls>
            </Fragment>,

            <div className = { className, 'section mindfulness-wp-block'}>
                <div className = 'container'>
                    <div className ={(function(){ return 'row '+ row_class; })()}>

                            <InnerBlocks allowedBlocks = { ['wm-blocks/flexbox-col'] } />

                    </div>
                </div>
            </div>
        ]);
    },

    save(props) {

        const { attributes, className} = props;
        const { row_class } = attributes;

        return (
            <div className = { className, 'section' }>
                <div className = 'container'>
                    <div className ={(function(){ return 'row '+ row_class; })()}>

                        <InnerBlocks.Content />

                    </div>
                </div>
            </div>
        );
    }
});

export {block}