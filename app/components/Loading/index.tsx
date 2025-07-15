import { ActivityIndicator, View } from "react-native";
import { style } from "./styles";
import { LoadingProps } from "./types";

export default function Loading({ width = 150, height = 150 }: LoadingProps) {
	const { container } = style({
		container: {
			width,
			height,
		},
	});

	return (
		<View style={container}>
			<ActivityIndicator />
		</View>
	);
}
