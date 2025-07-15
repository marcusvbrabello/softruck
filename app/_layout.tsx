import { useTheme } from "@utils/useThemeColor";
import { Stack } from "expo-router";

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
				options={{ title: "Lista de Viagens" }}
			/>
			<Stack.Screen
				name="views/track/index"
				options={{ title: "Detalhes da Viagem" }}
			/>
		</Stack>
	);
}
