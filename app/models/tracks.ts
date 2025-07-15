import tracksData from "@constants/data";
import { TracksData } from "app/@types/tracksData";

const useTrackModel = () => {
	async function get(): Promise<TracksData> {
		return tracksData;
	}

	return {
		get,
	};
};

export default useTrackModel;
