import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const UserDisplay = () => {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold,
		Montserrat_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<SafeAreaView style={styles.container}>
			<FontAwesome name="user-circle-o" size={125} color="white" />
			<Text style={styles.userText}>user-19388745238</Text>
			<Text style={styles.creationText}>Account Created March 9th, 2024</Text>
		</SafeAreaView>
	);
};

export default UserDisplay;

const styles = StyleSheet.create({
	container: {
		height: "65%",
		backgroundColor: "#256FE5",
		justifyContent: "center",
		alignItems: "center",
	},
	userText: {
		fontSize: 25,
		color: "white",
		fontFamily: "Montserrat_700Bold",
		marginTop: 20,
		letterSpacing: 1,
	},
	creationText: {
		fontSize: 11,
		color: "white",
		marginTop: 2,
		letterSpacing: 1,
	},
});
