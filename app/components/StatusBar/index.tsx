import { settingsStore } from "@store/settings";
import React from "react";
import { SystemBars } from "react-native-edge-to-edge";

export default function StatusBar() {
	const settings = settingsStore((state) => state);

	const { theme } = settings;

	return <SystemBars style={theme === "dark" ? "light" : "dark"} />;
}
