import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import PreloadScreen from "../../screens/PreloadScreen";
import { Animated, View } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const [isAppReady, setIsAppReady] = useState(false);
	const [fadeAnim] = useState(new Animated.Value(0));

	useEffect(() => {
		const checkAppReady = async () => {
			// preload code

			// simulating
			setTimeout(() => {
				setIsAppReady(true);
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}).start();
			}, 2000);
		};

		checkAppReady();
	}, []);

	return (
		<NavigationContainer>
			{isAppReady ? (
				<Animated.View style={{ flex: 1, opacity: fadeAnim }}>
					<Stack.Navigator>
						<Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
					</Stack.Navigator>
				</Animated.View>
			) : (
				<PreloadScreen />
			)}
		</NavigationContainer>
	);
};

export default Navigation;
