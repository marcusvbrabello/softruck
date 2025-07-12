type Sizes = {
	EXTRA_SMALL: number;
	SMALL: number;
	MEDIUM: number;
	LARGE: number;
	EXTRA_LARGE: number;
};

type LineHeights = {
	EXTRA_SMALL: number;
	SMALL: number;
	MEDIUM: number;
	LARGE: number;
	EXTRA_LARGE: number;
};

type Fonts = {
	THIN: string;
	EXTRA_LIGHT: string;
	LIGHT: string;
	REGULAR: string;
	MEDIUM: string;
	SEMI_BOLD: string;
	BOLD: string;
	EXTRA_BOLD: string;
	BLACK: string;
};

export type Typography = {
	SIZE: Sizes;
	LINEHEIGHT: LineHeights;
	FONT: Fonts;
};
