export interface GpsPoint {
	longitude: number;
	latitude: number;
	acquisition_time_unix: number;
	speed: number;
	direction: number;
	acquisition_time: string;
	address?: string;
}

export interface StopPoints {
	type: string;
	crs: {
		type: string;
		properties: {
			name: string;
		};
	};
	coordinates: [number, number, number, unknown, unknown][];
}

export interface Course {
	start_at: string;
	end_at: string;
	distance: number;
	speed_max: number;
	stops: number;
	total_stop_time: number;
	stop_points: StopPoints;
	gps_count: number;
	duration: number;
	speed_avg: number;
	gps: GpsPoint[];
}

export interface VehiclePicture {
	address: string;
}

export interface Vehicle {
	plate: string;
	vin: string;
	color: string;
	picture: VehiclePicture;
}

export interface TracksData {
	accOn: string;
	total_time: number;
	total_distance: number;
	speed_max: number;
	speed_avg: number;
	num_courses: number;
	stops: number;
	total_stop_time: number;
	perc_fixed: number;
	gps_count: number;
	courses: Course[];
	vehicle: Vehicle;
}
