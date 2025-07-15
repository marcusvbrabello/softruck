import { Course, TracksData, Vehicle } from "app/@types/tracksData";

export type States = {
	tracks: TracksData[];
	selectedTrack: Course;
	vehicle: Vehicle;
};

export type Actions = {
	changeTracks: (payload: TracksData[]) => void;
	changeSelectedTrack: (payload: Course) => void;
	changeVehicle: (payload: Vehicle) => void;
	reset: () => void;
};
