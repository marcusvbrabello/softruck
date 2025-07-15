import { fonts } from "@constants/fonts";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import RootLayout from "./_layout";

export default function App() {
	const [loaded, error] = useFonts(fonts);

	if (!loaded || error) {
		return null;
	}

	return (
		<>
			<RootLayout />
			<Toast />
		</>
	);
}
