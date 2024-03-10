import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { useFonts, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";

const ProgressBar = ({ progress }) => {
	const textColor = progress >= 0.55 ? "white" : "black";

	let [fontsLoaded] = useFonts({
		Montserrat_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.background}>
			<View style={[styles.fill, { width: `${progress * 100 - 1}%` }]} />
			<Text style={[styles.text, { color: textColor }]}>{(progress * 100).toFixed(0)}%</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		width: "90%",
		height: 45,
		backgroundColor: "white",
		borderRadius: 100,
		justifyContent: "center",
		position: "relative",
	},
	fill: {
		height: "90%",
		backgroundColor: "#256FE5",
		borderRadius: 100,
		marginLeft: "0.6%",
		position: "absolute",
	},
	text: {
		position: "absolute",
		textAlign: "center",
		width: "100%",
		fontFamily: "Montserrat_400Regular_Italic",
	},
});

export default ProgressBar;
