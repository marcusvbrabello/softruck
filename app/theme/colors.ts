import { Colors, StandardColors } from "app/@types/theme/colors";

const standardColors: StandardColors = {
	PRIMARY: "#0652BD",
	GRAY_500: "#707277",
	GRAY_400: "#909194",
	GRAY_200: "#B2B2B2",
	GRAY_100: "#BFC5CB",
	GRAY_75: "#D2D1D7",
	GRAY_50: "#F0F0F0",
	SUCCESS: "#32A54A",
	WARN: "#F29305",
	ERROR: "#BF130D",
	INFO_LIGHT: "#B3CCFF",
};

const colors: Colors = {
	light: {
		...standardColors,
		TEXT: "#262424",
		BACKGROUND: "#F9F9F9",
	},
	dark: {
		...standardColors,
		TEXT: "#F9F9F9",
		BACKGROUND: "#262424",
	},
};

export default colors;
