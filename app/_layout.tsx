import { useTheme } from "@utils/useThemeColor";
import { Stack } from "expo-router";
import i18n from "./i18n";

export default function RootLayout() {
	const colors = useTheme();

	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: colors.PRIMARY,
				},
				headerTintColor: colors.TEXT,
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="views/list/index"
				options={{ title: i18n.t("select_route") }}
			/>
			<Stack.Screen
				name="views/track/index"
				options={{ title: i18n.t("route_details") }}
			/>
		</Stack>
	);
}
