import i18n, { setLocale } from "@i18n/index";
import useTrackModel from "@models/tracks";
import { settingsStore } from "@store/settings";
import { tracksStore } from "@store/tracks";
import { setTheme } from "@utils/useThemeColor";
import { Course } from "app/@types/tracksData";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";

const useListViewModel = () => {
	const router = useRouter();
	const navigation = useNavigation();
	const store = tracksStore((state) => state);
	const settings = settingsStore((state) => state);

	const {
		changeTrackResponse,
		changeTracks,
		changeSelectedTrack,
		changeVehicle,
	} = store;
	const { language, theme } = settings;

	const { get } = useTrackModel();

	const [isLoadingList, setIsLoadingList] = useState(true);

	async function handleListData() {
		try {
			const response = await get();
			changeTrackResponse(response);
			changeTracks(response.courses);
			changeVehicle(response.vehicle);
		} catch (error) {
			console.error("Error handling data:", error);
		} finally {
			setIsLoadingList(false);
		}
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = date.getFullYear();
		const hours = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		return `${day}/${month}/${year} ${i18n.t(
			"list_date_connector"
		)} ${hours}:${minutes}`;
	}

	function formatDistance(distance: number): string {
		const km = (distance / 1000).toFixed(2);
		return `${km} km`;
	}

	function goTrack(item: Course) {
		changeSelectedTrack(item);
		router.push("/views/track" as any);
	}

	function handleTitle() {
		navigation.setOptions({ title: i18n.t("select_route") });
	}

	const [switchLocale, setSwitchLocale] = useState(false);
	const [switchTheme, setSwitchTheme] = useState(false);

	const handleSwitchLocale = () => {
		setSwitchLocale(language === "pt");
	};

	const handleSwitchTheme = () => {
		setSwitchTheme(theme === "dark");
	};

	const toggleSwitchLocale = async () => {
		setLocale(!switchLocale ? "pt" : "en");
		setSwitchLocale((previousState) => !previousState);
	};

	const toggleSwitchTheme = async () => {
		setTheme(!switchTheme ? "dark" : "light");
		setSwitchTheme((previousState) => !previousState);
	};

	return {
		...store,
		settings,
		isLoadingList,
		switchLocale,
		switchTheme,
		handleSwitchLocale,
		handleSwitchTheme,
		toggleSwitchLocale,
		toggleSwitchTheme,
		handleListData,
		formatDate,
		formatDistance,
		goTrack,
		handleTitle,
	};
};

export default useListViewModel;
