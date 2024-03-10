import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import ActionCreator from "./ActionCreator";
import { MaterialIcons, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Montserrat_600SemiBold, Montserrat_700Bold_Italic, useFonts } from "@expo-google-fonts/montserrat";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
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
		<ScrollView style={[styles.headerContent, { paddingHorizontal: screenWidth * 0.05, paddingTop: screenHeight * 0.04 }]}>
			<Text style={[styles.headerText, { fontSize: screenWidth * 0.05 }]}>let's get started</Text>
			<ActionCreator
				title={"test your knowledge"}
				icon={<MaterialIcons name="quiz" size={screenWidth * 0.06} color="white" style={styles.icon} />}
				action={() => {
					navigation.navigate("Learn");
				}}
			/>
			<ActionCreator title={"prepare for your exam"} icon={<FontAwesome name="pencil-square-o" size={screenWidth * 0.06} color="white" style={styles.icon} />} />
			<ActionCreator title={"generate magic notes"} icon={<FontAwesome6 name="note-sticky" size={screenWidth * 0.06} color="white" style={styles.icon} />} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	headerText: {
		color: "black",
		fontFamily: "Montserrat_600SemiBold",
		alignSelf: "flex-start",
	},
	headerContent: {
		flexDirection: "column",
	},
	icon: {
		marginRight: screenWidth * 0.02,
	},
});

export default HomeContent;
