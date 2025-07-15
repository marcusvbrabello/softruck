import { tracksStore } from "@store/tracks";
import { useCallback, useRef, useState } from "react";
import MapView from "react-native-maps";

const useAnimatedRouteTrackViewModel = () => {
	const store = tracksStore((state) => state);

	const { selectedTrack } = store;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const mapRef = useRef<MapView>(null);
	let timeoutRef = useRef<NodeJS.Timeout | number | null>(null);

	const clearAnimation = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, []);

	const animateToNext = useCallback(
		(index: number) => {
			if (index >= selectedTrack?.gps?.length - 1) {
				setIsAnimating(false);
				return;
			}

			const current = selectedTrack?.gps[index];
			const next = selectedTrack?.gps[index + 1];

			const timeDiffSeconds =
				next.acquisition_time_unix - current.acquisition_time_unix;

			const minDelay = 1500;
			const maxDelay = 3000;
			let delay = Math.min(
				Math.max(timeDiffSeconds * 10, minDelay),
				maxDelay
			);

			timeoutRef.current = setTimeout(() => {
				setCurrentIndex(index + 1);

				if (mapRef.current) {
					mapRef.current.animateToRegion(
						{
							latitude: next.latitude,
							longitude: next.longitude,
							latitudeDelta: 0.01,
							longitudeDelta: 0.01,
						},
						300
					);
				}

				animateToNext(index + 1);
			}, delay);
		},
		[selectedTrack?.gps]
	);

	const startAnimation = useCallback(() => {
		if (selectedTrack?.gps?.length < 2) return;

		clearAnimation();
		setCurrentIndex(0);
		setIsAnimating(true);

		animateToNext(0);
	}, [selectedTrack?.gps, animateToNext, clearAnimation]);

	const routeCoordinates = selectedTrack?.gps?.map((p) => ({
		latitude: p.latitude,
		longitude: p.longitude,
	}));

	const currentPoint = selectedTrack?.gps[currentIndex];

	return {
		...store,
		clearAnimation,
		startAnimation,
		currentIndex,
		mapRef,
		routeCoordinates,
		currentPoint,
	};
};

export default useAnimatedRouteTrackViewModel;
