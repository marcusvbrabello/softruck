import StatusBar from "@components/StatusBar";
import { GenericText } from "@components/Texts/GenericText";
import { View } from "react-native";

export default function List() {
	return (
		<>
			<StatusBar />
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<GenericText text="List" size="LARGE" lineHeight="LARGE" />
			</View>
		</>
	);
}
