import { useTheme } from "@utils/useThemeColor";
import i18n from "app/i18n";
import useAnimatedRouteTrackViewModel from "app/view_models/track/animated_route";
import React, { useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import SpriteCar from "../SpriteCar";
import { style } from "./styles";

export const AnimatedRoute = () => {
	const colors = useTheme();

	const {
		container,
		map,
		vehicleIcon,
		startMarker,
		startMarkerInner,
		endMarker,
		endMarkerInner,
	} = style();

	const {
		selectedTrack,
		clearAnimation,
		startAnimation,
		currentIndex,
		mapRef,
		routeCoordinates,
		currentPoint,
	} = useAnimatedRouteTrackViewModel();

	useEffect(() => {
		const timer = setTimeout(() => {
			startAnimation();
		}, 1000);

		return () => {
			clearTimeout(timer);
			clearAnimation();
		};
	}, [startAnimation, clearAnimation]);

	useEffect(() => {
		return () => {
			clearAnimation();
		};
	}, [clearAnimation]);

	if (!selectedTrack?.gps || selectedTrack?.gps.length === 0) {
		return <View style={container} />;
	}

	return (
		<View style={container}>
			<MapView
				ref={mapRef}
				style={map}
				initialRegion={{
					latitude: selectedTrack?.gps[0].latitude,
					longitude: selectedTrack?.gps[0].longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
				showsUserLocation={false}
				showsMyLocationButton={false}
			>
				<Polyline
					coordinates={routeCoordinates}
					strokeWidth={3}
					strokeColor={colors.GRAY}
					lineDashPattern={[5, 5]}
				/>

				<Polyline
					coordinates={routeCoordinates.slice(0, currentIndex + 1)}
					strokeWidth={5}
					strokeColor={colors.PRIMARY}
				/>

				<Marker
					coordinate={{
						latitude: selectedTrack?.gps[0].latitude,
						longitude: selectedTrack?.gps[0].longitude,
					}}
					title={i18n.t("begin_marker_title")}
				>
					<View style={startMarker}>
						<View style={startMarkerInner} />
					</View>
				</Marker>

				<Marker
					coordinate={{
						latitude:
							selectedTrack?.gps[selectedTrack?.gps.length - 1]
								.latitude,
						longitude:
							selectedTrack?.gps[selectedTrack?.gps.length - 1]
								.longitude,
					}}
					title={i18n.t("end_marker_title")}
				>
					<View style={endMarker}>
						<View style={endMarkerInner} />
					</View>
				</Marker>

				{currentPoint && (
					<Marker
						coordinate={{
							latitude: currentPoint.latitude,
							longitude: currentPoint.longitude,
						}}
						rotation={currentPoint.direction}
						flat
						anchor={{ x: 0.5, y: 0.5 }}
					>
						<SpriteCar direction={currentPoint.direction} />
					</Marker>
				)}
			</MapView>
		</View>
	);
};
