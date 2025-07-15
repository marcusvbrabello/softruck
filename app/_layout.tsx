import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				headerTitle: "none",
			}}
		>
			<Stack.Screen name="views/list/index" />
			<Stack.Screen name="views/track/[id]" />
		</Stack>
	);
}
