import {Theme, Themes} from '../models/theme';
import sun from '../assets/images/sun.svg';
import moon from '../assets/images/moon.svg';

const light: Theme = {
	name: 'light',
	colors: {
		backgroundPrimary: '#D5713F',
		backgroundSecondary: '#FAE7B5',
	},
	image: moon,
};

const dark: Theme = {
	name: 'dark',
	colors: {
		backgroundPrimary: 'black',
		backgroundSecondary: '#293133',
	},
	image: sun,
};

export const themes: Themes = {
	light,
	dark,
};
