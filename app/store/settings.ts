import { Actions, Language, States, Theme } from "app/@types/store/settings";
import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState: States = {
	theme: "light",
	language: "pt",
};

export const settingsStore = create<States & Actions>(
	combine(initialState, (set) => ({
		changeTheme: (payload: Theme) => set((state) => ({ theme: payload })),
		changeLanguage: (payload: Language) =>
			set((state) => ({ language: payload })),
		reset: () => set(() => initialState),
	}))
);
