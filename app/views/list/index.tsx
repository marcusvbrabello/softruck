import Loading from "@components/Loading";
import { GenericText } from "@components/Texts/GenericText";
import i18n, { setLocale } from "@i18n/index";
import resizePixel from "@utils/resizePixel";
import { setTheme, useTheme } from "@utils/useThemeColor";
import useListViewModel from "app/view_models/list";
import { CaretRightIcon, MoonIcon, SunDimIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";
import {
	FlatList,
	Image,
	ScrollView,
	Switch,
	TouchableOpacity,
	View,
} from "react-native";
import { style, vehicleColor } from "./styles";

export default function List() {
	const colors = useTheme();

	const {
		container,
		content,
		wrapLoading,
		vehicleImage,
		trackButton,
		contentContainerStyle,
		topContent,
		infoTopContent,
		row,
		contentTrackButton,
		wrapSwitches,
		switches,
	} = style();

	const {
		settings,
		vehicle,
		tracks,
		isLoadingList,
		handleListData,
		formatDate,
		formatDistance,
		goTrack,
		handleTitle,
	} = useListViewModel();

	const { language, theme, changeTheme } = settings;

	useEffect(() => {
		handleTitle();
	}, [language]);

	useEffect(() => {
		handleSwitchLocale();
		handleSwitchTheme();
		handleListData();
	}, []);

	const [switchLocale, setSwitchLocale] = useState(false);
	const [switchTheme, setSwitchTheme] = useState(false);

	const handleSwitchLocale = () => {
		setSwitchLocale(language === "pt");
	};

	const handleSwitchTheme = () => {
		setSwitchTheme(theme === "dark");
	};

	const toggleSwitchLocale = async () => {
		setLocale(!switchLocale ? "pt" : "en");
		setSwitchLocale((previousState) => !previousState);
	};

	const toggleSwitchTheme = async () => {
		setTheme(!switchTheme ? "dark" : "light");
		setSwitchTheme((previousState) => !previousState);
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={container}>
			{isLoadingList ? (
				<View style={wrapLoading}>
					<Loading />
				</View>
			) : (
				<View style={content}>
					<View style={switches}>
						<View style={wrapSwitches}>
							<GenericText
								text="EN"
								size="MEDIUM"
								lineHeight="MEDIUM"
								font="REGULAR"
							/>
							<Switch
								trackColor={{
									false: colors.INFO_LIGHT,
									true: colors.INFO_LIGHT,
								}}
								thumbColor={colors.GRAY}
								ios_backgroundColor={colors.INFO_LIGHT}
								onValueChange={toggleSwitchLocale}
								value={switchLocale}
							/>
							<GenericText
								text="PT"
								size="MEDIUM"
								lineHeight="MEDIUM"
								font="REGULAR"
							/>
						</View>
						<View style={wrapSwitches}>
							<SunDimIcon
								size={resizePixel(20)}
								color={colors.TEXT}
							/>
							<Switch
								trackColor={{
									false: colors.INFO_LIGHT,
									true: colors.INFO_LIGHT,
								}}
								thumbColor={colors.GRAY}
								ios_backgroundColor={colors.INFO_LIGHT}
								onValueChange={toggleSwitchTheme}
								value={switchTheme}
							/>
							<MoonIcon
								size={resizePixel(20)}
								color={colors.TEXT}
							/>
						</View>
					</View>

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
						scrollEnabled={false}
						keyExtractor={(_, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => goTrack(item)}
								style={trackButton}
							>
								<View style={contentTrackButton}>
									<View style={row}>
										<GenericText
											text={`${i18n.t(
												"list_date_content"
											)}:`}
											size="MEDIUM"
											lineHeight="MEDIUM"
											font="REGULAR"
										/>
										<GenericText
											text={formatDate(item?.start_at)}
											size="MEDIUM"
											lineHeight="MEDIUM"
											font="REGULAR"
										/>
									</View>
									<View style={row}>
										<GenericText
											text={`${i18n.t(
												"list_distance_content"
											)}:`}
											size="MEDIUM"
											lineHeight="MEDIUM"
											font="REGULAR"
										/>
										<GenericText
											text={formatDistance(
												item?.distance
											)}
											size="MEDIUM"
											lineHeight="MEDIUM"
											font="REGULAR"
										/>
									</View>
								</View>
								<CaretRightIcon
									size={resizePixel(20)}
									color={colors.GRAY}
								/>
							</TouchableOpacity>
						)}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={contentContainerStyle}
					/>
				</View>
			)}
		</ScrollView>
	);
}
