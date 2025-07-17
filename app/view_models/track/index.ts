import i18n from "@i18n/index";
import { settingsStore } from "@store/settings";
import { useNavigation } from "expo-router";

const useTrackViewModel = () => {
	const navigation = useNavigation();
	const settings = settingsStore((state) => state);

	function handleTitle() {
		navigation.setOptions({ title: i18n.t("route_details") });
	}

	return {
		settings,
		handleTitle,
	};
};

export default useTrackViewModel;
