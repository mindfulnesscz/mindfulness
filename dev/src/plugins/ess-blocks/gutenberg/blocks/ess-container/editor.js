/*jshint esversion: 6 */

const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.blockEditor;


const block = registerBlockType('mindfulness-blocks/ess-container', {
    title: 'Container Wrapper',
    icon: 'format-image',
    category: 'layout',

    attributes: {
    },

    edit(props) {

        const {setAttributes, attributes, className} = props;

        return ([


        
        <div className={className, 'container'} >

                <InnerBlocks />

        </div>
        ]);
    },

    save(props) {

        const {setAttributes, attributes, className} = props;

        return (
            <div className={className, 'container'} >

			    <InnerBlocks.Content />

            </div>
        );
    }
});

export {block}