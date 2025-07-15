import Loading from "@components/Loading";
import { GenericText } from "@components/Texts/GenericText";
import useListViewModel from "app/view_models/list";
import { useEffect } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { style, vehicleColor } from "./style";

export default function List() {
	const {
		container,
		content,
		wrapLoading,
		vehicleImage,
		trackButton,
		contentContainerStyle,
		topContent,
		infoTopContent,
	} = style();

	const {
		vehicle,
		tracks,
		isLoadingList,
		handleListData,
		formatDate,
		formatDistance,
		goTrack,
	} = useListViewModel();

	useEffect(() => {
		handleListData();
	}, []);

	return (
		<>
			<View style={container}>
				{isLoadingList ? (
					<View style={wrapLoading}>
						<Loading />
					</View>
				) : (
					<View style={content}>
						<View style={topContent}>
							<Image
								source={{ uri: vehicle?.picture?.address }}
								style={vehicleImage}
							/>

							<View style={infoTopContent}>
								<View style={vehicleColor(vehicle?.color)} />
								<GenericText
									text={vehicle?.plate}
									size="LARGE"
									lineHeight="LARGE"
									font="SEMI_BOLD"
								/>
							</View>
						</View>

						<FlatList
							data={tracks}
							keyExtractor={(_, index) => index.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => goTrack(item)}
									style={trackButton}
								>
									<GenericText
										text={formatDate(item?.start_at)}
										size="MEDIUM"
										lineHeight="MEDIUM"
										font="REGULAR"
									/>
									<GenericText
										text={formatDistance(item?.distance)}
										size="MEDIUM"
										lineHeight="MEDIUM"
										font="REGULAR"
									/>
								</TouchableOpacity>
							)}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={contentContainerStyle}
						/>
					</View>
				)}
			</View>
		</>
	);
}
