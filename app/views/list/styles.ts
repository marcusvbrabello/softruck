import resizePixel from "@utils/resizePixel";
import { useTheme } from "@utils/useThemeColor";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: resizePixel(32, "height"),
		paddingHorizontal: resizePixel(32, "width"),
	},
	content: {
		flex: 1,
		alignItems: "center",
	},
	wrapLoading: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	vehicleImage: {
		borderRadius: resizePixel(50),
		width: resizePixel(100, "width"),
		height: resizePixel(100, "height"),
	},
	trackButton: {
		paddingVertical: resizePixel(16, "height"),
		paddingHorizontal: resizePixel(16, "width"),
		marginVertical: resizePixel(6, "height"),
		borderRadius: resizePixel(8),
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		minWidth: "100%",
	},
	contentTrackButton: {
		width: "85%",
	},
	contentContainerStyle: {
		paddingTop: resizePixel(16, "height"),
	},
	topContent: {
		alignItems: "center",
		gap: resizePixel(8, "height"),
	},
	infoTopContent: {
		flexDirection: "row",
		alignItems: "center",
		gap: resizePixel(8, "width"),
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	wrapSwitches: {
		flexDirection: "row",
		alignItems: "center",
		gap: resizePixel(8, "width"),
	},
	switches: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: resizePixel(16, "height"),
	},
});

export const vehicleColor = (color: string): ViewStyle => ({
	width: resizePixel(16, "width"),
	height: resizePixel(16, "height"),
	borderRadius: resizePixel(8),
	backgroundColor: color,
});

export const style = () => {
	const colors = useTheme();
	const { container, trackButton } = styles;

	const dynamicContainer = {
		...container,
		backgroundColor: colors.BACKGROUND,
	};

	const dynamicTrackButton = {
		...trackButton,
		borderColor: colors.TEXT,
	};

	return {
		...styles,
		container: dynamicContainer,
		trackButton: dynamicTrackButton,
	};
};
