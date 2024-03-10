import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
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

	const screenWidth = Dimensions.get("window").width;
	const screenHeight = Dimensions.get("window").height;

	return (
		<SafeAreaView style={[styles.container, { height: Platform.OS === "android" ? screenHeight * 0.25 : screenHeight * 0.3 }]}>
			<View style={styles.headerContent}>
				<Text style={styles.headerText}>ZEAL</Text>
				<Ionicons name="notifications" size={screenWidth * 0.1} color="white" />
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
		backgroundColor: "#256FE5",
	},
	headerContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: "5%",
		paddingTop: "5%",
	},
	headerText: {
		fontSize: Dimensions.get("window").width * 0.1,
		fontWeight: "bold",
		color: "white",
		fontFamily: "Montserrat_700Bold_Italic",
		letterSpacing: -5,
		fontStyle: "italic",
	},
	underTextContent: {
		alignItems: "center",
		marginTop: "6%",
	},
	underText: {
		fontSize: Dimensions.get("window").width * 0.05,
		color: "white",
		fontFamily: "Montserrat_400Regular_Italic",
		alignSelf: "flex-start",
		paddingHorizontal: "7%",
		paddingBottom: "3%",
	},
});

export default TopScreen;
