export type States = {
	theme: Theme;
	language: Language;
};

export type Actions = {
	changeTheme: (payload: Theme) => void;
	changeLanguage: (payload: Language) => void;
	reset: () => void;
};

export type Language = "pt" | "en" | "";
export type Theme = "light" | "dark" | "";
