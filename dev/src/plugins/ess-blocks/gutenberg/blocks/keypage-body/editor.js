/*jshint esversion: 6 */

const { registerBlockType } = wp.blocks;

const {
  InspectorControls,

  PanelColorSettings,

  InnerBlocks,

  withColors,

  getColorClassName,
} = wp.blockEditor;

const { PanelBody, PanelRow, SelectControl } = wp.components;

const { Fragment } = wp.element;

const block = registerBlockType('mindfulness-blocks/keypage-body', {
  title: 'Keypage Body',
  icon: 'format-image',
  category: 'layout',

  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white',
    },
  },

  edit: withColors('backgroundColor')((props) => {

    const {
      className,
      backgroundColor,
      setBackgroundColor,
    } = props;

    const colorBlockClasses = (backgroundColor.class || '').trim();

    console.log(backgroundColor);
    console.log(' ------------------------------ ttttttttttttttttttttttttttttttttttttt ');
    return ([

      <Fragment key={"keypage-body-" + Math.round(Math.random() * 10000)}>
        <InspectorControls>
          <PanelBody title={'Keypage Body'} initalOpen={true}>
            <PanelRow>
              <PanelColorSettings
                title={'Background Color'}
                colorSettings={[
                  {
                    value: backgroundColor.color,

                    onChange: setBackgroundColor,

                    label: 'Click to pick',
                  },
                ]}
              ></PanelColorSettings>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </Fragment>,

      <main className={colorBlockClasses} >
        <div class={'container'}>

          <InnerBlocks />

        </div>
      </main>
    ]);
  }),

  save(props) {

    const { attributes, className } = props;
    const { backgroundColor } = attributes;

    const colorBlockClasses = (getColorClassName('background-color', backgroundColor) || '').trim();

    return (
      <main className={colorBlockClasses} >
        <div class={'container'}>


          <InnerBlocks.Content />

        </div>
      </main>
    );
  }
});

export { block }