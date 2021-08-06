/*jshint esversion: 6 */

const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.blockEditor;


const block = registerBlockType('mindfulness-blocks/ess-main', {
    title: 'ESS - Main',
    icon: 'format-image',
    category: 'layout',

    attributes: {
    },

    edit(props) {
        console.log('JUHUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');

        const {setAttributes, attributes, className} = props;

        return ([


        
        <main className={className, 'mindfulness-wp-block ess-main'} >

                <InnerBlocks />

        </main>
        ]);
    },

    save(props) {

        const {setAttributes, attributes, className} = props;

        return (
            <main className={className, 'ess-main'} >


			        <InnerBlocks.Content />

            </main>
        );
    }
});

export {block}