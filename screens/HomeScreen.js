import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopScreen from "../components/Home/TopScreen";
import HomeContent from "../components/Home/HomeContent";

const HomeScreen = () => {
	return (
		<View>
			<StatusBar barStyle="light-content" />
			<TopScreen />
			<HomeContent />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
