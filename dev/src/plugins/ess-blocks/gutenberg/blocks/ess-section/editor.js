/*jshint esversion: 6 */

const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.blockEditor;


const block = registerBlockType('mindfulness-blocks/ess-section', {
    title: 'Section Wrapper',
    icon: 'format-image',
    category: 'layout',

    attributes: {
    },

    edit(props) {

        const {setAttributes, attributes, className} = props;

        return ([


        
        <section className={className, 'ess-section'} >
             <div class="container">

                <InnerBlocks />

            </div>
        </section>
        ]);
    },

    save(props) {

        const {setAttributes, attributes, className} = props;

        return (
            <section className={className, 'ess-section'} >
                <div class="container">


			        <InnerBlocks.Content />

                </div>
            </section>
        );
    }
});

export {block}