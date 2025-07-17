import useTrackViewModel from "app/view_models/track";
import { useEffect } from "react";
import { AnimatedRoute } from "./Components/AnimatedRoute";

export default function Track() {
	const { settings, handleTitle } = useTrackViewModel();

	const { language } = settings;

	useEffect(() => {
		handleTitle();
	}, [language]);

	return <AnimatedRoute />;
}
