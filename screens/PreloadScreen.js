import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { useFonts, Montserrat_700Bold_Italic, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";

const PreloadScreen = () => {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold_Italic,
		Montserrat_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.loadingContainer}>
			<Text style={styles.loadingText}>ZEAL</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#256FE5",
	},
	loadingText: {
		fontSize: 60,
		fontWeight: "bold",
		color: "white",
		fontFamily: "Montserrat_700Bold_Italic",
		letterSpacing: -5,
	},
});

export default PreloadScreen;
