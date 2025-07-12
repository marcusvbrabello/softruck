import { Stack } from "expo-router";
import "react-native-reanimated";

export default function TrackLayout() {
	return (
		<Stack>
			<Stack.Screen name="[id]" options={{ headerShown: false }} />
		</Stack>
	);
}
