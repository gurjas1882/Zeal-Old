import { Montserrat_600SemiBold, Montserrat_700Bold_Italic, useFonts } from "@expo-google-fonts/montserrat";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ActionCreator from "./ActionCreator";
import { MaterialIcons, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeContent = () => {
	const navigation = useNavigation();
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold_Italic,
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<ScrollView style={styles.headerContent}>
			<Text style={styles.headerText}>let's get started</Text>
			<ActionCreator
				title={"test your knowledge"}
				icon={<MaterialIcons name="quiz" size={24} color="white" style={styles.icon} />}
				action={() => {
					navigation.navigate("Learn");
				}}
			/>
			<ActionCreator title={"prepare for your exam"} icon={<FontAwesome name="pencil-square-o" size={24} color="white" style={styles.icon} />} />
			<ActionCreator title={"generate magic notes"} icon={<FontAwesome6 name="note-sticky" size={24} color="white" style={styles.icon} />} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	headerText: {
		fontSize: 20,
		color: "black",
		fontFamily: "Montserrat_600SemiBold",
		alignSelf: "flex-start",
	},
	headerContent: {
		flexDirection: "column",
		paddingHorizontal: 22,
		paddingTop: 30,
	},
	icon: {
		marginRight: 10,
	},
});

export default HomeContent;
