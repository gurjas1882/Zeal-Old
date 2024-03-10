import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Montserrat_400Regular_Italic } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

const Notes = () => {
	const navigation = useNavigation();
	let [fontsLoaded] = useFonts({
		Montserrat_400Regular_Italic,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("NoteCreateMenu");
				}}
			>
				<View style={styles.box}>
					<AntDesign name="plus" size={40} color="black" />
				</View>
				<Text style={styles.underText}>Create Note</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		padding: 20,
	},
	box: {
		height: 200,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderRadius: 10,
	},
	button: {
		width: "45%",
		height: 200,
	},
	underText: {
		marginTop: 5,
		textAlign: "center",
		fontFamily: "Montserrat_400Regular_Italic",
	},
});

export default Notes;
