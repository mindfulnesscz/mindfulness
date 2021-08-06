/*jshint esversion: 6 */

const {registerBlockType} = wp.blocks;
const {InnerBlocks} = wp.blockEditor;


const block = registerBlockType('mindfulness-blocks/keypage-body', {
    title: 'Keypage Body',
    icon: 'format-image',
    category: 'layout',

    attributes: {
    },

    edit(props) {

        const { className } = props;

        let classes = className + ' ' + 'ess-main mindfulness-wp-block';
        console.log ( classes );
        console.log ( className );
        console.log (' ------------------------------ ttttttttttttttttttttttttttttttttttttt ');
        return ([


        
        <main className={ classes } >
             <div class="container">

                <InnerBlocks />

            </div>
        </main>
        ]);
    },

    save(props) {

        const {setAttributes, attributes, className} = props;

        return (
            <main className={className} >
                <div class="container">


			        <InnerBlocks.Content />

                </div>
            </main>
        );
    }
});

export {block}