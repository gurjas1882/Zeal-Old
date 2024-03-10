import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../../components/Utilties/BackButton";
import NoteNameInput from "../../components/NoteCreation/NoteNameInput";

const NoteName = () => {
	return (
		<View style={styles.container}>
			<BackButton />
			<NoteNameInput />
		</View>
	);
};

export default NoteName;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
