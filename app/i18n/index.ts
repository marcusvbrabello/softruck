import { storage } from "@constants/storage";
import { settingsStore } from "@store/settings";
import { getLocalStorage, saveLocalStorage } from "@utils/useLocalStorage";
import { Language } from "app/@types/store/settings";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { en } from "./locales/en";
import { pt } from "./locales/pt";

const i18n = new I18n({
	en,
	pt,
});

async function getStorageLocale() {
	try {
		const locale = await getLocalStorage(storage.language);

		return locale;
	} catch (error) {
		console.log("Error getting storage locale:", error);
	}
}

getStorageLocale().then((locale) => {
	const { changeLanguage } = settingsStore.getState();

	const definedLocale = locale ?? getLocales()[0].languageCode ?? "pt";
	changeLanguage(definedLocale as Language);
	i18n.locale = definedLocale;
});

export async function setLocale(locale: string) {
	const { changeLanguage } = settingsStore.getState();

	changeLanguage(locale as Language);
	i18n.locale = locale;
	await saveLocalStorage(storage.language, locale);
}

export default i18n;
