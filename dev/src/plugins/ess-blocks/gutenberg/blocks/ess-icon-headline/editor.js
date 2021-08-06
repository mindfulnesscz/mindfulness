/*jshint esversion: 6 */
import { SelectControl } from '@wordpress/components';
const { registerBlockType } = wp.blocks;
const {  MediaUpload,  InspectorControls, InnerBlocks } = wp.blockEditor;
const { TextControl , PanelBody, PanelRow, ToggleControl } = wp.components;
const { Fragment } = wp.element;



const block = registerBlockType('mindfulness-blocks/icon-headline', {
    title: 'Icon Headline',
    icon: 'format-image',
    category: 'layout',

    attributes: {
        iconClass: {
            type: 'string',
            default: ''
        },
        headlineAlign: {
            type: 'string',
            default: 'center'
        },
        backgroundImage: {
            type: 'string',
            default: ''
        },
        iconSize: {
            type: 'string',
            default: 'normal-icon'
        },
        iconInline: {
            type: 'boolean',
            default: 'true'
        }
    },

    edit( props ) {
        const {setAttributes, attributes, className, clientId} = props;
        const {iconSize, iconClass, headlineAlign, backgroundImage, iconInline} = attributes;


        remove_blank(clientId, backgroundImage );

        return ([
            <Fragment>
            <InspectorControls>
                <PanelBody title={'Ess Icon Block'} initalOpen={true}>
                    <PanelRow>
                        <ToggleControl
                            label="Icon in line"
                            help={ iconInline ? 'Icon is inline' : 'Icon is on top' }
                            checked={ iconInline }
                            onChange = { ( value ) => {
                                setAttributes( { iconInline: value } );
                            }}
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label="Icon Class"
                            value={ iconClass }
                            onChange = { ( value ) => {
                                setAttributes( { iconClass: value } );
                            }}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={'Icon Size'}
                            options = { [
                                { label: 'Small', value: 'small-icon' },
                                { label: 'Normal', value: 'normal-icon' },
                                { label: 'Medium', value: 'medium-icon'},
                                { label: 'Big', value: 'big-icon'},
                                { label: 'Huge', value: 'huge-icon'}
                            ]}
                            onChange = { ( value ) => {
                                setAttributes( { iconSize: value } );
                            }}
                            value = { attributes.iconSize }
                        >
                        </SelectControl>
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={'Headline Align'}
                            options = { [
                                { label: 'Left', value: 'ess-icon-left' },
                                { label: 'Center', value: 'ess-icon-center' },
                                { label: 'Right', value: 'ess-icon-right'},
                            ]}
                            onChange = { ( value ) => {
                                setAttributes( { headlineAlign: value } );
                            }}
                            value = { attributes.headlineAlign }
                        >
                        </SelectControl>
                    </PanelRow>
                    <PanelRow>
                        <MediaUpload
                            onSelect={ ( imageObject )=>{
                                console.log( imageObject );
                                setAttributes ( { backgroundImage: imageObject.url } );
                            }}
                            type="image"
                            value={ backgroundImage }
                            render={({open}) => (
                                <button onClick={open} className="components-button editor-post-featured-image__toggle">
                                    Background Image:
                                </button>
                            )}
                        />
                </PanelRow>        
            </PanelBody>
        </InspectorControls>
        </Fragment>,

        
        <div className={className, (function(){ return 'mindfulness-wp-block icon-headline '+ headlineAlign+ ' ' + iconSize + ' ' + className;}() ) } >
            <span className={ (function(){ return 'ess-icon '+ iconClass }() ) } ></span>
            <div className="icon-headline-img">
                <img src={(function(){ return backgroundImage;})()}></img>
            </div>
            <InnerBlocks />
        </div>

        ]);

    },

    save( props ) {

        const { attributes, className } = props;
        const { iconSize, iconClass, headlineAlign, backgroundImage, iconInline } = attributes;
        
        return (
            <div className={className, ( function(){ return 'icon-headline '+ headlineAlign + ' ' + iconSize + (!iconInline ? ' dir-column' : '') }() ) } >
                <span className={ (function(){ return 'ess-icon '+ iconClass }() ) } ></span>
                <div className="icon-headline-img">
                    <img src={ ( function(){ return backgroundImage; } )() }></img>
                </div>
                <InnerBlocks.Content />
            </div>
        );
    }
});

export {block}

function remove_blank(id,  bkgImage){
    
    let div = document.getElementById('block-'+id);

    if (div){
        let img = div.querySelector('.icon-headline-img');
        console.log(img);
        
        if(!bkgImage)
            img.style.display = 'none';
        else
            img.style.display = 'block';
    }
    else {
        console.log('another loop');
        setTimeout(()=>{remove_blank(id, bkgImage);},100);
    }
}