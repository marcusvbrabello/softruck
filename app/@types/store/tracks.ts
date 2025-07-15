import { Course, TracksData, Vehicle } from "app/@types/tracksData";

export type States = {
	trackResponse: TracksData;
	tracks: Course[];
	selectedTrack: Course;
	vehicle: Vehicle;
};

export type Actions = {
	changeTrackResponse: (payload: TracksData) => void;
	changeTracks: (payload: Course[]) => void;
	changeSelectedTrack: (payload: Course) => void;
	changeVehicle: (payload: Vehicle) => void;
	reset: () => void;
};
