import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular_Italic, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import { AntDesign } from "@expo/vector-icons";
import TextRecognition from "../Learn/TextRecognition";

const NoteNameInput = () => {
	const [text, setText] = useState("");

	const handleTextChange = (newText) => {
		setText(newText);
	};

	let [fontsLoaded] = useFonts({
		Montserrat_700Bold,
		Montserrat_400Regular_Italic,
		Montserrat_300Light,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<Text style={styles.text}>name of note</Text>
				<TextInput style={styles.input} onChangeText={handleTextChange} value={text} placeholder="" />
				<TouchableOpacity style={styles.touchableButton} onPress={() => console.log("Pressed")}>
					<View style={styles.arrow}>
						<AntDesign style={styles.icon} name="arrowright" size={26} color="white" />
					</View>
				</TouchableOpacity>
				<Text style={styles.text}>upload images</Text>
				<TextRecognition />
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		backgroundColor: "#f8f8f8",
	},
	input: {
		height: 50,
		width: "100%",
		borderColor: "black",
		borderWidth: 1,
		paddingHorizontal: 15,
		borderRadius: 10,
		borderColor: "black",
		fontFamily: "Montserrat_400Regular_Italic",
	},
	text: {
		fontSize: 36,
		fontWeight: "bold",
		color: "#333",
		fontFamily: "Montserrat_300Light",
		fontStyle: "italic",
		marginTop: "10%",
	},
	touchableButton: {
		position: "absolute",
		bottom: 60,
		right: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	arrow: {
		backgroundColor: "#256FE5",
		padding: 13,
		borderRadius: 100,
		marginLeft: 10,
	},
	buttonText: {
		color: "black",
		fontWeight: "light",
		fontFamily: "Montserrat_300Light",
		fontSize: 20,
	},
});

export default NoteNameInput;
