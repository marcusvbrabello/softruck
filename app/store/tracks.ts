import { Actions, States } from "app/@types/store/tracks";
import { Course, TracksData, Vehicle } from "app/@types/tracksData";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState: States = {
	trackResponse: {} as TracksData,
	tracks: [] as Course[],
	selectedTrack: {} as Course,
	vehicle: {} as Vehicle,
};

export const tracksStore = create<States & Actions>(
	combine(initialState, (set) => ({
		changeTrackResponse: (payload: TracksData) =>
			set((state) => ({ trackResponse: payload })),
		changeTracks: (payload: Course[]) =>
			set((state) => ({ tracks: payload })),
		changeSelectedTrack: (payload: Course) =>
			set((state) => ({ selectedTrack: payload })),
		changeVehicle: (payload: Vehicle) =>
			set((state) => ({ vehicle: payload })),
		reset: () => set(() => initialState),
	}))
);
