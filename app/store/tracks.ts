import { Actions, States } from "app/@types/store/tracks";
import { Course, TracksData, Vehicle } from "app/@types/tracksData";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState: States = {
	tracks: [] as TracksData[],
	selectedTrack: {} as Course,
	vehicle: {} as Vehicle,
};

export const tracksStore = create<States & Actions>(
	combine(initialState, (set) => ({
		changeTracks: (payload: TracksData[]) =>
			set((state) => ({ tracks: payload })),
		changeSelectedTrack: (payload: Course) =>
			set((state) => ({ selectedTrack: payload })),
		changeVehicle: (payload: Vehicle) =>
			set((state) => ({ vehicle: payload })),
		reset: () => set(() => initialState),
	}))
);
