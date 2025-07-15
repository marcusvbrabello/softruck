import typography from "@theme/typography";

export type FontWeight =
	| "THIN"
	| "EXTRA_LIGHT"
	| "LIGHT"
	| "REGULAR"
	| "MEDIUM"
	| "SEMI_BOLD"
	| "BOLD"
	| "EXTRA_BOLD"
	| "BLACK";
export type FontSize = keyof typeof typography.SIZE;
export type LineHeight = keyof typeof typography.LINEHEIGHT;
export type TextAlign = "center" | "right" | "left" | "justify";

export type GenericTextProps = {
	font?: FontWeight;
	size?: FontSize;
	color?: string;
	text?: string;
	children?: React.ReactNode;
	lineHeight?: LineHeight;
};
