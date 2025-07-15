import Toast from "react-native-toast-message";

const useToast = (
	title: string,
	type: "success" | "error" | "info" = "success",
	visibilityTime: number = 3000,
	position?: "top" | "bottom"
) => {
	Toast.show({
		type,
		text1: title,
		visibilityTime,
		position: position ?? "bottom",
	});
};

export default useToast;
