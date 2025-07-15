import useTrackModel from "@models/tracks";
import { tracksStore } from "@store/tracks";
import { Course } from "app/@types/tracksData";
import { useRouter } from "expo-router";
import { useState } from "react";

const useListViewModel = () => {
	const router = useRouter();
	const store = tracksStore((state) => state);

	const {
		changeTrackResponse,
		changeTracks,
		changeSelectedTrack,
		changeVehicle,
	} = store;

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
		return `${day}/${month}/${year} às ${hours}:${minutes}`;
	}

	function formatDistance(distance: number): string {
		const km = (distance / 1000).toFixed(2);
		return `${km} km`;
	}

	function goTrack(item: Course) {
		changeSelectedTrack(item);
		router.push("/views/track" as any);
	}

	return {
		...store,
		isLoadingList,
		handleListData,
		formatDate,
		formatDistance,
		goTrack,
	};
};

export default useListViewModel;
