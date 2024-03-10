import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Montserrat_600SemiBold, Montserrat_700Bold_Italic, useFonts } from "@expo-google-fonts/montserrat";

const ActionCreator = ({ title, action, icon }) => {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold_Italic,
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableOpacity style={styles.container} onPress={action}>
			<View style={styles.content}>
				{icon}
				<Text style={styles.containerText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		borderColor: "#256FE5",
		borderWidth: 3,
		borderRadius: 10,
		backgroundColor: "rgba(29, 102, 218, 0.85)",
		height: 80,
		padding: 10,
		marginTop: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
	},
	containerText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		fontFamily: "Montserrat_700Bold_Italic",
	},
});

export default ActionCreator;
