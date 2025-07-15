import resizePixel from "@utils/resizePixel";
import { StyleParams } from "app/@types/SpriteCar/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		overflow: "hidden",
	},
});

export const style = (params: StyleParams) => {
	const { container } = styles;

	const dynamicContainer = {
		...container,
		width: resizePixel(params.container.frameWidth, "width"),
		height: resizePixel(params.container.spriteHeight, "height"),
	};

	const dynamicImage = {
		width: resizePixel(params.image.spriteWidth, "width"),
		height: resizePixel(params.image.spriteHeight, "height"),
		transform: [
			{ translateX: resizePixel(params.image.translateX, "width") },
		],
	};

	return {
		container: dynamicContainer,
		image: dynamicImage,
	};
};
