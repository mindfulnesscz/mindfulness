/*jshint esversion: 9 */


import { DateTimePicker, TextControl, PanelBody } from '@wordpress/components';
import { getSettings } from '@wordpress/date';
import { withState } from '@wordpress/compose';
import { withSelect, withDispatch } from "@wordpress/data";

const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;
const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;

const { __experimentalGetSettings } = wp.date;

let StartsDate = (props) => {

	const settings = __experimentalGetSettings();

	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only the lower case a
			.replace(/\\\\/g, '') // Replace "//" with empty strings
			.split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
	);

	return (
		<>
			<PanelBody
				title={__("Event Starts", "textdomain")}
				icon="admin-post"
				initialOpen={false}
			>

				<DateTimePicker
					currentDate={props.starts}
					onChange={(date) => {
						wp.data.dispatch('core/editor').editPost({ meta: { _esseventstarts_text_metafield: date } })
						props.onStartsChange(date)
					}
					}
					locale={settings.l10n.locale}
					is12Hour={is12HourTime}
				/>
			</PanelBody>
		</>
	)
}
StartsDate = withSelect(
	(select) => {
		return {
			starts: select('core/editor').getEditedPostAttribute('meta')['_esseventstarts_text_metafield']
		}
	}
)(StartsDate);

StartsDate = withDispatch(
	(dispatch) => {
		return {
			onStartsChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _esseventstarts_text_metafield: value } })
			}
		}
	}
)(StartsDate);


let EndDate = (props) => {
	const settings = __experimentalGetSettings();

	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only the lower case a
			.replace(/\\\\/g, '') // Replace "//" with empty strings
			.split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
	);

	return (
		<>
			<PanelBody
				title={__("Event Ends", "textdomain")}
				icon="admin-post"
				initialOpen={false}
			>

				<DateTimePicker
					currentDate={props.ends}
					onChange={(date) => {
						wp.data.dispatch('core/editor').editPost({ meta: { _esseventends_text_metafield: date } })
						props.onStartsChange(date)
					}
					}
					locale={settings.l10n.locale}
					is12Hour={is12HourTime}
				/>
			</PanelBody>
		</>
	)
}

EndDate = withSelect(
	(select) => {
		return {
			ends: select('core/editor').getEditedPostAttribute('meta')['_esseventends_text_metafield']
		}
	}
)(EndDate);

EndDate = withDispatch(
	(dispatch) => {
		return {
			onStartsChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _esseventends_text_metafield: value } })
			}
		}
	}
)(EndDate);

let Location = (props) => {
	return (
		<>
			<PanelBody
				title={__("Location", "textdomain")}
				icon="admin-post"
				intialOpen={true}
			>
				<TextControl
					value={props.location}
					onChange={(value) => props.onLocationChange(value)}
					label={__("Enter the location", "textdomain")}
				/>
			</PanelBody>
		</>
	)
}
Location = withSelect(
	(select) => {
		return {
			location: select('core/editor').getEditedPostAttribute('meta')['_essevent_location']
		}
	}
)(Location);

Location = withDispatch(
	(dispatch) => {
		return {
			onLocationChange: (value) => {
				dispatch('core/editor').editPost({ meta: { _essevent_location: value } })
			}
		}
	}
)(Location);

registerPlugin(
	'essevents-sidebar',
	{
		icon: 'smiley',
		render: () => {

			return (
				<>
					<PluginSidebarMoreMenuItem
						target="myprefix-sidebar"
					>
						{__('Meta Options', 'textdomain')}
					</PluginSidebarMoreMenuItem>
					<PluginSidebar
						title={__('Meta Options', 'textdomain')}
					>

						<StartsDate />

						<EndDate />

						<Location />

					</PluginSidebar>
				</>
			);
		}
	}
);