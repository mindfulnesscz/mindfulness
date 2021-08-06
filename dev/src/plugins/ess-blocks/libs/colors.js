/*jshint esversion: 6 */


export function ess_get_colors() {
    return (
        [
            {   name: 'primary',
                color: '#3cb4ff'},
            {
                name: 'bg-secondary',
                color: '#0f2a56'
            },
            {
                name: 'ligh-blue',
                color: '#d3effb',
            },
            {
                name: 'psp',
                color: '#7f3f98',
            },
            {
                name: 'sense',
                color: '#b88321',
            },
            {
                name: 'merge',
                color: '#008e77',
            },
            {
                name: 'psp - light',
                color: '#b9b0bd',
            },
            {
                name: 'sense - light',
                color: '#c2b7a2',
            },
            {
                name: 'merge - light',
                color: '#9cb4b0',
            },
            {
                name: 'grey - lightest',
                color: '#f5f5f5'
            },
            {
                name: 'Oil & Gas',
                color: '#52656e'
            }
        ]
    );
}

export function ess_transtale_colors_to_classes(color) {
    switch (color) {
        case '#3cb4ff':
            return ('bg-primary');
        case '#0f2a56':
            return ('bg-secondary');

        case '#d3effb':
            return ('bg-essblue-lightest');

        case '#7f3f98':
            return ('bg-psp');

        case '#b88321':
            return ('bg-sense');

        case '#008e77':
            return ('bg-merge');

        case '#b9b0bd':
            return ('bg-psp-gradient');

        case '#c2b7a2':
            return ('bg-sense-gradient');

        case '#9cb4b0':
            return ('bg-merge-gradient');

        case '#f5f5f5':
            return ('bg-grey-lightest');

        default:
            return ('bg-secondary');
        case '#52656e':
            return ('bg-oil-gas');
    }
}
export default {
    ess_get_colors,
    ess_transtale_colors_to_classes
};