(function (blocks, blockEditor, components, element, i18n) {
  var registerBlockType = blocks.registerBlockType;
  var InspectorControls = blockEditor.InspectorControls;
  var MediaUpload = blockEditor.MediaUpload;
  var MediaUploadCheck = blockEditor.MediaUploadCheck;
  var RichText = blockEditor.RichText;
  var URLInput = blockEditor.URLInput;
  var useBlockProps = blockEditor.useBlockProps;
  var Button = components.Button;
  var PanelBody = components.PanelBody;
  var SelectControl = components.SelectControl;
  var TextControl = components.TextControl;
  var ToggleControl = components.ToggleControl;
  var createElement = element.createElement;
  var __ = i18n.__;

  var templateUrl = window.MindGlobal && window.MindGlobal.templateUrl
    ? window.MindGlobal.templateUrl
    : '';
  var homeUrl = window.MindGlobal && window.MindGlobal.homeUrl
    ? window.MindGlobal.homeUrl
    : '';
  var fallbackImage = templateUrl + '/assets/images/paint-iq-images/paint-iq-hero copy.webp';

  function cssUrl(url) {
    return url ? 'url("' + url.replace(/"/g, '\\"') + '")' : 'none';
  }

  function getClasses(attributes, editorPreview) {
    return [
      'wp-block-mindfulness-product-feature-card',
      'has-overlay-' + attributes.overlay,
      'has-height-' + attributes.height,
      editorPreview ? 'is-editor-preview' : '',
    ].filter(Boolean).join(' ');
  }

  function getStyle(attributes) {
    return {
      '--mind-product-card-image': cssUrl(attributes.backgroundUrl || fallbackImage),
      '--mind-product-card-position': attributes.backgroundPosition,
    };
  }

  function CardMarkup(props) {
    var attributes = props.attributes;
    var setAttributes = props.setAttributes;
    var editable = !!setAttributes;
    var title = attributes.title;
    var headline = attributes.headline;
    var description = attributes.description;
    var buttonText = attributes.buttonText;

    var titleNode = editable
      ? createElement(RichText, {
        tagName: 'span',
        className: 'mind-product-card__title',
        value: title,
        allowedFormats: [],
        placeholder: __('Product name', 'mindfulness'),
        onChange: function (value) {
          setAttributes({ title: value });
        },
      })
      : createElement(RichText.Content, {
        tagName: 'span',
        className: 'mind-product-card__title',
        value: title,
      });

    var headlineNode = editable
      ? createElement(RichText, {
        tagName: 'span',
        className: 'mind-product-card__headline',
        value: headline,
        allowedFormats: ['core/bold', 'core/italic'],
        placeholder: __('Headline', 'mindfulness'),
        onChange: function (value) {
          setAttributes({ headline: value });
        },
      })
      : createElement(RichText.Content, {
        tagName: 'span',
        className: 'mind-product-card__headline',
        value: headline,
      });

    var descriptionNode = editable
      ? createElement(RichText, {
        tagName: 'span',
        className: 'mind-product-card__description',
        value: description,
        allowedFormats: ['core/bold', 'core/italic'],
        placeholder: __('Description', 'mindfulness'),
        onChange: function (value) {
          setAttributes({ description: value });
        },
      })
      : createElement(RichText.Content, {
        tagName: 'span',
        className: 'mind-product-card__description',
        value: description,
      });

    var buttonNode = editable
      ? createElement(RichText, {
        tagName: 'span',
        className: 'mind-product-card__button wm-button spacy inverse lg',
        value: buttonText,
        allowedFormats: [],
        placeholder: __('Button text', 'mindfulness'),
        onChange: function (value) {
          setAttributes({ buttonText: value });
        },
      })
      : createElement(RichText.Content, {
        tagName: 'span',
        className: 'mind-product-card__button wm-button spacy inverse lg',
        value: buttonText,
      });

    return createElement(
      element.Fragment,
      null,
      createElement('span', { className: 'mind-product-card__media', 'aria-hidden': 'true' }),
      createElement(
        'div',
        { className: 'mind-product-card__inner container p-top-okta p-bot-okta' },
        createElement(
          'div',
          { className: 'row mind-product-card__row' },
          createElement(
            'div',
            { className: 'col-xs-12 col-md-7 mind-product-card__title-col p-bot-okta' },
            titleNode,
            createElement('span', { className: 'mind-product-card__button-wrap p-top-base' }, buttonNode),
          ),
          createElement(
            'div',
            { className: 'col-xs-12 col-md-4 col-md-offset-1 mind-product-card__copy p-bot-okta' },
            headlineNode,
            descriptionNode,
          ),
        ),
      ),
    );
  }

  registerBlockType('mindfulness/product-feature-card', {
    title: __('Product Feature Card', 'mindfulness'),
    description: __('Display one featured product as a full-width linked card.', 'mindfulness'),
    icon: 'cover-image',
    category: 'design',
    supports: {
      html: false,
    },
    attributes: {
      title: {
        type: 'string',
        default: 'PaintIQ',
      },
      headline: {
        type: 'string',
        default: 'Measure.<br>Optimize. Spray.',
      },
      description: {
        type: 'string',
        default: 'A standalone laser sensor system that replaces manual spray measurement with a 5-second scan, generates optimized robot paths, and predicts 3D film build before a single production body is sprayed.',
      },
      buttonText: {
        type: 'string',
        default: 'Explore PaintIQ',
      },
      url: {
        type: 'string',
        default: homeUrl + '/product-paint-iq',
      },
      opensInNewTab: {
        type: 'boolean',
        default: false,
      },
      backgroundUrl: {
        type: 'string',
        default: '',
      },
      backgroundId: {
        type: 'number',
      },
      backgroundPosition: {
        type: 'string',
        default: 'center center',
      },
      overlay: {
        type: 'string',
        default: 'strong',
      },
      height: {
        type: 'string',
        default: 'default',
      },
    },
    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var blockProps = useBlockProps({
        className: getClasses(attributes, true),
        style: getStyle(attributes),
      });

      return createElement(
        element.Fragment,
        null,
        createElement(
          InspectorControls,
          null,
          createElement(
            PanelBody,
            { title: __('Product Card Settings', 'mindfulness'), initialOpen: true },
            createElement('p', null, __('Card link', 'mindfulness')),
            createElement(URLInput, {
              value: attributes.url,
              onChange: function (value) {
                setAttributes({ url: value });
              },
            }),
            createElement(ToggleControl, {
              label: __('Open in new tab', 'mindfulness'),
              checked: attributes.opensInNewTab,
              onChange: function (value) {
                setAttributes({ opensInNewTab: value });
              },
            }),
            createElement(SelectControl, {
              label: __('Height', 'mindfulness'),
              value: attributes.height,
              options: [
                { label: __('Default', 'mindfulness'), value: 'default' },
                { label: __('Hero', 'mindfulness'), value: 'hero' },
                { label: __('Compact', 'mindfulness'), value: 'compact' },
              ],
              onChange: function (value) {
                setAttributes({ height: value });
              },
            }),
            createElement(SelectControl, {
              label: __('Overlay', 'mindfulness'),
              value: attributes.overlay,
              options: [
                { label: __('Strong', 'mindfulness'), value: 'strong' },
                { label: __('Medium', 'mindfulness'), value: 'medium' },
                { label: __('Soft', 'mindfulness'), value: 'soft' },
              ],
              onChange: function (value) {
                setAttributes({ overlay: value });
              },
            }),
            createElement(TextControl, {
              label: __('Background position', 'mindfulness'),
              value: attributes.backgroundPosition,
              onChange: function (value) {
                setAttributes({ backgroundPosition: value });
              },
            }),
          ),
          createElement(
            PanelBody,
            { title: __('Background Image', 'mindfulness'), initialOpen: false },
            createElement(
              MediaUploadCheck,
              null,
              createElement(MediaUpload, {
                allowedTypes: ['image'],
                value: attributes.backgroundId,
                onSelect: function (media) {
                  setAttributes({
                    backgroundId: media.id,
                    backgroundUrl: media.url,
                  });
                },
                render: function (mediaProps) {
                  return createElement(
                    Button,
                    { variant: 'secondary', onClick: mediaProps.open },
                    attributes.backgroundUrl
                      ? __('Replace background image', 'mindfulness')
                      : __('Choose background image', 'mindfulness'),
                  );
                },
              }),
            ),
            attributes.backgroundUrl && createElement(
              Button,
              {
                className: 'mind-product-card__remove-image',
                variant: 'link',
                isDestructive: true,
                onClick: function () {
                  setAttributes({ backgroundId: undefined, backgroundUrl: '' });
                },
              },
              __('Remove background image', 'mindfulness'),
            ),
          ),
        ),
        createElement(
          'div',
          blockProps,
          createElement(CardMarkup, {
            attributes: attributes,
            setAttributes: setAttributes,
          }),
        ),
      );
    },
    save: function (props) {
      var attributes = props.attributes;
      var blockProps = useBlockProps.save({
        className: getClasses(attributes, false),
        style: getStyle(attributes),
        href: attributes.url || undefined,
        target: attributes.opensInNewTab ? '_blank' : undefined,
        rel: attributes.opensInNewTab ? 'noopener noreferrer' : undefined,
        'aria-label': attributes.buttonText || attributes.title || undefined,
      });

      return createElement(
        'a',
        blockProps,
        createElement(CardMarkup, {
          attributes: attributes,
        }),
      );
    },
  });
})(
  window.wp.blocks,
  window.wp.blockEditor,
  window.wp.components,
  window.wp.element,
  window.wp.i18n,
);
