import { Props } from "app/@types/SpriteCar/sprite_car";
import React from "react";
import { Image, View } from "react-native";
import { style } from "./styles";

const SpriteCar = ({ direction }: Props) => {
	const totalFrames = 120;
	const spriteWidth = 4590;
	const spriteHeight = 38;
	const frameWidth = spriteWidth / totalFrames;

	const frameIndex =
		Math.floor((direction / 360) * totalFrames) % totalFrames;
	const translateX = -frameIndex * frameWidth;

	const { container, image } = style({
		container: {
			frameWidth,
			spriteHeight,
		},
		image: {
			spriteWidth,
			spriteHeight,
			translateX,
		},
	});

	return (
		<View style={container}>
			<Image source={require("@assets/images/cars.png")} style={image} />
		</View>
	);
};

export default SpriteCar;
