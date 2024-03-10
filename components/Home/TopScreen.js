import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Montserrat_700Bold_Italic, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";

const TopScreen = () => {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold_Italic,
		Montserrat_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContent}>
				<Text style={styles.headerText}>ZEAL</Text>
				<Ionicons name="notifications" size={32} color="white" />
			</View>
			<View style={styles.underTextContent}>
				<Text style={styles.underText}>your plant progress</Text>
				<ProgressBar progress={Math.random().toFixed(2)} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 250,
		backgroundColor: "#256FE5",
	},
	headerContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	headerText: {
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
		fontFamily: "Montserrat_700Bold_Italic",
		letterSpacing: -5,
	},
	underTextContent: {
		alignItems: "center",
		marginTop: 15,
	},
	underText: {
		fontSize: 20,
		color: "white",
		fontFamily: "Montserrat_400Regular_Italic",
		alignSelf: "flex-start",
		paddingHorizontal: 22,
		paddingBottom: 10,
	},
});

export default TopScreen;
