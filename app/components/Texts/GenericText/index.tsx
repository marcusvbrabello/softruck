import React from "react";
import { Text } from "react-native";
import { style } from "./styles";
import { GenericTextProps } from "./types";

export function GenericText({
	font,
	size,
	color,
	lineHeight,
	text,
	children,
	...rest
}: GenericTextProps) {
	const { generic } = style({
		font,
		size,
		color,
		lineHeight,
	});

	return (
		<Text style={generic} {...rest}>
			{text || children}
		</Text>
	);
}
