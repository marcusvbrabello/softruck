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
		paddingVertical: resizePixel(12, "height"),
		paddingHorizontal: resizePixel(12, "width"),
		marginVertical: resizePixel(6, "height"),
		borderRadius: resizePixel(8),
		borderWidth: 1,
		minWidth: "100%",
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
});

export const vehicleColor = (color: string): ViewStyle => ({
	width: resizePixel(16, "width"),
	height: resizePixel(16, "height"),
	borderRadius: resizePixel(8),
	backgroundColor: color,
});

export const style = () => {
	const colors = useTheme();
	const { container } = styles;

	const dynamicContainer = {
		...container,
		backgroundColor: colors.BACKGROUND,
	};

	return {
		...styles,
		container: dynamicContainer,
	};
};
