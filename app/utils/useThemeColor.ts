import colors from "@theme/colors";
import { useColorScheme } from "react-native";

export function useTheme(): typeof colors.light | typeof colors.dark {
	const theme = useColorScheme() ?? "light";

	return colors[theme];
}
