import resizePixel from "@utils/resizePixel";
import { StyleSheet } from "react-native";
import { LoadingStyleProps } from "./types";

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export const style = (params: LoadingStyleProps) => {
	const { container } = styles;

	const dynamicContainer = {
		...container,
		width: resizePixel(params?.container?.width, "width"),
		height: resizePixel(params?.container?.height, "height"),
	};

	return { container: dynamicContainer };
};
