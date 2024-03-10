import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Montserrat_600SemiBold, Montserrat_700Bold_Italic, useFonts } from "@expo-google-fonts/montserrat";
import TextRecognition from "../components/Learn/TextRecognition";

const LearnScreen = () => {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold_Italic,
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView>
			<Text style={styles.title}>NOTES</Text>
			<TextRecognition />
		</SafeAreaView>
	);
};

export default LearnScreen;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
		fontFamily: "Montserrat_700Bold_Italic",
		fontStyle: "italic",
	},
});
