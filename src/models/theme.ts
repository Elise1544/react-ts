export interface Theme {
	name: string;
	colors: {
		backgroundPrimary: string;
		backgroundSecondary: string;
		fill: string;
	};
}

export interface Themes {
	[key: string]: Theme;
}
