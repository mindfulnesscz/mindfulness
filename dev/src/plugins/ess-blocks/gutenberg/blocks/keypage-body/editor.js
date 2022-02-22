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
  },

  edit: withColors('backgroundColor')((props) => {

    const {
      className,
      attributes,
      setAttributes,
      backgroundColor,
      setBackgroundColor,
    } = props;

    const colorBlockClasses = (
      'container ess-color-block-bkg' +
      ' ' +
      (backgroundColor.class || '')
    ).trim();


    let classes = className + ' ' + 'ess-main mindfulness-wp-block';
    console.log(classes);
    console.log(className);
    console.log(' ------------------------------ ttttttttttttttttttttttttttttttttttttt ');
    return ([

      <Fragment key={"keypage-body-" + Math.round(Math.random() * 10000)}>
        <InspectorControls>
          <PanelBody title={'Keypage Body'} initalOpen={true}>
            <PanelRow>
              <PanelColorSettings
                title={'Choose Color'}
                colorSettings={[
                  {
                    value: backgroundColor.color,

                    onChange: setBackgroundColor,

                    label: 'Background Color',
                  },
                ]}
              ></PanelColorSettings>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </Fragment>,

      <main className={classes + ' ' + colorBlockClasses} >
        <div class={'container'}>

          <InnerBlocks />

        </div>
      </main>
    ]);
  }),

  save(props) {

    const { attributes, className } = props;
    const { backgroundColor } = attributes;

    const colorBlockClasses = (
      'ess-color-block-bkg' +
      ' ' +
      (getColorClassName('background-color', backgroundColor) || '')
    ).trim();

    return (
      <main className={className + ' ' + colorBlockClasses} >
        <div class={'container'}>


          <InnerBlocks.Content />

        </div>
      </main>
    );
  }
});

export { block }