import typography from "@theme/typography";
import resizePixel from "@utils/resizePixel";
import { useTheme } from "@utils/useThemeColor";
import { GenericTextProps } from "./types";

const fontMap = {
	THIN: typography.FONT.THIN,
	EXTRA_LIGHT: typography.FONT.EXTRA_LIGHT,
	LIGHT: typography.FONT.LIGHT,
	REGULAR: typography.FONT.REGULAR,
	MEDIUM: typography.FONT.MEDIUM,
	SEMI_BOLD: typography.FONT.SEMI_BOLD,
	BOLD: typography.FONT.BOLD,
	EXTRA_BOLD: typography.FONT.EXTRA_BOLD,
	BLACK: typography.FONT.BLACK,
};

const sizeMap = {
	SMALL: typography.SIZE.SMALL,
	MEDIUM: typography.SIZE.MEDIUM,
	LARGE: typography.SIZE.LARGE,
	EXTRA_LARGE: typography.SIZE.EXTRA_LARGE,
	EXTRA_SMALL: typography.SIZE.EXTRA_SMALL,
};

const lineHeightMap = {
	SMALL: typography.LINEHEIGHT.SMALL,
	MEDIUM: typography.LINEHEIGHT.MEDIUM,
	LARGE: typography.LINEHEIGHT.LARGE,
	EXTRA_LARGE: typography.LINEHEIGHT.EXTRA_LARGE,
	EXTRA_SMALL: typography.LINEHEIGHT.EXTRA_SMALL,
};

type SizeKey = keyof typeof sizeMap;

export const style = (params: GenericTextProps) => {
	const colors = useTheme();

	const dynamicGeneric = {
		fontFamily: fontMap[params.font || "REGULAR"],
		fontSize: resizePixel(
			sizeMap[(params.size || "MEDIUM") as SizeKey],
			"width"
		),
		color: params.color || colors.TEXT,
		lineHeight: resizePixel(
			lineHeightMap[(params.lineHeight || "MEDIUM") as SizeKey],
			"width"
		),
	};

	return {
		generic: dynamicGeneric,
	};
};
