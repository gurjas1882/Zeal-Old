import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { useFonts, Montserrat_700Bold_Italic, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";
import { AntDesign } from "@expo/vector-icons";

const NoteNameInput = () => {
	const [text, setText] = useState("");

	const handleTextChange = (newText) => {
		setText(newText);
	};

	let [fontsLoaded] = useFonts({
		Montserrat_700Bold_Italic,
		Montserrat_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>NAME OF NOTE</Text>
			<TextInput style={styles.input} onChangeText={handleTextChange} value={text} placeholder="Type here..." />
			<TouchableOpacity style={styles.touchableButton} onPress={() => console.log("Pressed")}>
				<Text style={styles.buttonText}>Continue</Text>
				<AntDesign style={styles.icon} onPress={() => {}} name="arrowright" size={30} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 30, // Increased padding for spaciousness
		backgroundColor: "#f8f8f8", // Subtle background color
	},
	input: {
		height: 50, // Slightly larger input
		width: "80%",
		borderColor: "#ccc", // Softer border
		borderWidth: 1,
		paddingHorizontal: 15, // More padding
		borderRadius: 10, // Smoother corners
		marginBottom: 20, // Increased spacing
		fontFamily: "Montserrat_400Regular_Italic", // Regular font for input
	},
	text: {
		fontSize: 28, // Slightly smaller title
		fontWeight: "bold",
		color: "#333", // A bit darker
		fontFamily: "Montserrat_700Bold_Italic",
		fontStyle: "italic",
		marginBottom: 30, // More space below title
	},
	touchableButton: {
		// Update the key here
		backgroundColor: "#0056b3", // Matches your existing button color
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 10,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
});

export default NoteNameInput;
