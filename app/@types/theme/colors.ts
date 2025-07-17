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
	GRAY_500: string;
	GRAY_400: string;
	GRAY_200: string;
	GRAY_100: string;
	GRAY_75: string;
	GRAY_50: string;
	SUCCESS: string;
	WARN: string;
	ERROR: string;
	INFO_LIGHT: string;
}
