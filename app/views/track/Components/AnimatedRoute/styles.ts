import { useTheme } from "@utils/useThemeColor";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	vehicleIcon: {
		width: 40,
		height: 40,
	},
	startMarkerInner: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: "white",
	},
	marker: {
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	endMarkerInner: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: "white",
	},
});

export const style = () => {
	const colors = useTheme();
	const { marker } = styles;

	const dynamicMarker = {
		...marker,
		backgroundColor: colors.SUCCESS,
	};

	return {
		...styles,
		startMarker: dynamicMarker,
		endMarker: dynamicMarker,
	};
};
