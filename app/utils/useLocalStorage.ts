import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveLocalStorage(key: string, value: string) {
	console.log("Saving to local storage:", key, value);
	await AsyncStorage.setItem(key, value);
}

export async function getLocalStorage(key: string): Promise<string | null> {
	return await AsyncStorage.getItem(key);
}

export async function deleteLocalStorage(key: string) {
	await AsyncStorage.removeItem(key);
}
