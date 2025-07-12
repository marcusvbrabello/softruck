import { fonts } from "@constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
	const [loaded, error] = useFonts(fonts);

	if (!loaded || error) {
		return null;
	}

	return (
		<Stack initialRouteName="list">
			<Stack.Screen name="list" />
			<Stack.Screen name="track" />
		</Stack>
	);
}
