import { Colors, StandardColors } from "app/@types/theme/colors";

const standardColors: StandardColors = {
	PRIMARY: "#3FCF72",
	GRAY: "#909194",
	SUCCESS: "#32A54A",
	WARN: "#F29305",
	ERROR: "#BF130D",
	INFO_LIGHT: "#B3CCFF",
};

const colors: Colors = {
	light: {
		...standardColors,
		TEXT: "#262424",
		BACKGROUND: "#E8F1FF",
	},
	dark: {
		...standardColors,
		TEXT: "#E8F1FF",
		BACKGROUND: "#262424",
	},
};

export default colors;
