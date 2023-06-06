export interface Theme {
	name: string;
	colors: {
		backgroundPrimary: string;
		backgroundSecondary: string;
	};
	image: string;
}

export interface Themes {
	[key: string]: Theme;
}
