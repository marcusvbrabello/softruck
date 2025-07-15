import { fonts } from "@constants/fonts";
import List from "@views/list";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

export default function App() {
	const [loaded, error] = useFonts(fonts);

	if (!loaded || error) {
		return null;
	}

	return (
		<>
			<List />
			<Toast />
		</>
	);
}
