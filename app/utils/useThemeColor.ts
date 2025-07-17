import { storage } from "@constants/storage";
import { settingsStore } from "@store/settings";
import colors from "@theme/colors";
import { Theme } from "app/@types/store/settings";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { getLocalStorage, saveLocalStorage } from "./useLocalStorage";

export async function setTheme(theme: Theme) {
	const { changeTheme } = settingsStore.getState();

	await saveLocalStorage(storage.theme, theme);

	changeTheme(theme);
}

export function useTheme(): typeof colors.light | typeof colors.dark {
	const settings = settingsStore((state) => state);
	const { theme, changeTheme } = settings;

	const systemTheme = useColorScheme() ?? "light";

	useEffect(() => {
		const initializeTheme = async () => {
			try {
				const storedTheme = await getLocalStorage(storage.theme);

				if (storedTheme) {
					changeTheme(storedTheme as Theme);
				} else if (theme === "") {
					changeTheme(systemTheme);
				}
			} catch (error) {
				console.log("Error loading theme from storage:", error);
				if (theme === "") changeTheme(systemTheme);
			}
		};

		initializeTheme();
	}, []);

	const currentTheme = theme || systemTheme;

	return colors[currentTheme];
}
