import { Actions, States } from "app/@types/store/tracks";
import { TracksData } from "app/@types/tracksData";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState: States = {
	tracks: [] as TracksData[],
};

export const extractStore = create<States & Actions>(
	combine(initialState, (set) => ({
		changeTracks: (payload: TracksData[]) =>
			set((state) => ({ tracks: payload })),
		reset: () => set(() => initialState),
	}))
);
