import { tracksStore } from "@store/tracks";
import { useCallback, useEffect, useRef, useState } from "react";
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

	const calculateDirection = useCallback(
		(
			from: { latitude: number; longitude: number },
			to: { latitude: number; longitude: number }
		): number => {
			const deltaLat = to.latitude - from.latitude;
			const deltaLng = to.longitude - from.longitude;
			const angle = Math.atan2(deltaLng, deltaLat) * (180 / Math.PI);
			return (angle + 360) % 360;
		},
		[]
	);

	// Função para calcular distância entre dois pontos GPS (Haversine)
	const calculateDistance = useCallback(
		(
			point1: { latitude: number; longitude: number },
			point2: { latitude: number; longitude: number }
		): number => {
			const R = 6371e3; // Raio da Terra em metros
			const φ1 = (point1.latitude * Math.PI) / 180;
			const φ2 = (point2.latitude * Math.PI) / 180;
			const Δφ = ((point2.latitude - point1.latitude) * Math.PI) / 180;
			const Δλ = ((point2.longitude - point1.longitude) * Math.PI) / 180;

			const a =
				Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
				Math.cos(φ1) *
					Math.cos(φ2) *
					Math.sin(Δλ / 2) *
					Math.sin(Δλ / 2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

			return R * c; // Distância em metros
		},
		[]
	);

	const calculateSpeedBasedDelay = useCallback(
		(current: any, next: any): number => {
			const speedKmh = current.speed || 30;
			const distance = calculateDistance(current, next);
			const speedMs = speedKmh / 3.6;
			const timeInSeconds = distance / speedMs;
			const animationFactor = 100;
			const delay = (timeInSeconds * 1000) / animationFactor;

			// Debug: Verificar se a velocidade está sendo usada corretamente
			// console.log(`Speed: ${speedKmh} km/h, Distance: ${distance.toFixed(2)}m, Delay: ${delay.toFixed(0)}ms`);

			return Math.max(100, Math.min(2000, delay));
		},
		[calculateDistance]
	);

	const animateToNext = useCallback(
		(index: number) => {
			if (!selectedTrack?.gps || index >= selectedTrack.gps.length - 1) {
				setIsAnimating(false);
				return;
			}

			const current = selectedTrack.gps[index];
			const next = selectedTrack.gps[index + 1];

			const delay = calculateSpeedBasedDelay(current, next);

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
		[selectedTrack?.gps, calculateSpeedBasedDelay]
	);

	const startAnimation = useCallback(() => {
		if (!selectedTrack?.gps || selectedTrack.gps.length < 2) return;

		clearAnimation();
		setCurrentIndex(0);
		setIsAnimating(true);

		animateToNext(0);
	}, [selectedTrack?.gps, animateToNext, clearAnimation]);

	useEffect(() => {
		if (isAnimating) {
			startAnimation();
		} else {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [startAnimation, isAnimating]);

	const routeCoordinates = selectedTrack?.gps?.map((p) => ({
		latitude: p.latitude,
		longitude: p.longitude,
	}));

	const currentPoint = selectedTrack?.gps[currentIndex];

	const progress =
		selectedTrack?.gps && selectedTrack.gps.length > 0
			? (currentIndex / (selectedTrack.gps.length - 1)) * 100
			: 0;

	const direction =
		currentPoint && selectedTrack?.gps[currentIndex + 1]
			? calculateDirection(
					currentPoint,
					selectedTrack.gps[currentIndex + 1]
			  )
			: 0;

	return {
		...store,
		clearAnimation,
		startAnimation,
		currentIndex,
		mapRef,
		routeCoordinates,
		currentPoint: currentPoint
			? {
					...currentPoint,
					direction,
			  }
			: null,
		progress,
		direction,
	};
};

export default useAnimatedRouteTrackViewModel;
