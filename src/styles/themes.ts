import {Theme, Themes} from '../models/theme';

const light: Theme = {
	name: 'light',
	colors: {
		backgroundPrimary: '#D5713F',
		backgroundSecondary: '#FAE7B5',
		fill: '#000000',
	},
};

const dark: Theme = {
	name: 'dark',
	colors: {
		backgroundPrimary: 'black',
		backgroundSecondary: '#293133',
		fill: '#ffffff',
	},
};

export const themes: Themes = {
	light,
	dark,
};
