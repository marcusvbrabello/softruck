import { ActivityIndicator, View } from "react-native";
import { style } from "./styles";
import { LoadingProps } from "./types";

export default function Loading({ size = 150 }: LoadingProps) {
	const { container } = style({
		container: {
			size,
		},
	});

	return (
		<View style={container}>
			<ActivityIndicator size="large" />
		</View>
	);
}
