import { TracksData } from "app/@types/tracksData";

export type States = {
	tracks: TracksData[];
};

export type Actions = {
	changeTracks: (payload: TracksData[]) => void;
	reset: () => void;
};
