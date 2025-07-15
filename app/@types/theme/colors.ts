export interface Colors {
	light: CompleteColors;
	dark: CompleteColors;
}

export interface CompleteColors extends StandardColors {
	TEXT: string;
	BACKGROUND: string;
}

export interface StandardColors {
	PRIMARY: string;
	GRAY: string;
	SUCCESS: string;
	WARN: string;
	ERROR: string;
	INFO_LIGHT: string;
}
