/*jshint esversion: 6 */

const { registerBlockType} = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { TextControl, PanelBody, PanelRow, } = wp.components;
const { Fragment } = wp.element;

const block = registerBlockType('mindfulness-blocks/link-wrapper', {
    title: 'Link Wrapper',
    icon: 'format-image',
    category: 'layout',

    attributes: {
        link_href: {
            type: 'text',
            default: ''
        },
    },

    edit(props) {

        const { setAttributes, attributes, className, clientId} = props;
        const { link_href } = attributes;

        return ([
            <Fragment>
                <InspectorControls>
                    <PanelBody title={'Link Wrapper settings'} initalOpen={true}>
                        <PanelRow>
                            <TextControl
                                label="Link address"
                                value={ link_href }
                                onChange = { 
                                    ( value ) => {
                                        setAttributes( { link_href: value } );
                                    }
                                }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>,

            <div className = { className, 'mindfulness-wp-block' }>
               <InnerBlocks />
            </div>
        ]);

    },

    save(props) {

        const { attributes, className} = props;
        const { link_href } = attributes;

        return (
            <a href= { link_href } className = { className, (function(){ return ' ess-link-wrapper' })()}>
                <InnerBlocks.Content />
            </a>
        );
    }
});

export {block}