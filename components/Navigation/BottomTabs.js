// Imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import LearnScreen from "../../screens/LearnScreen";
import PlantScreen from "../../screens/PlantScreen";

// Initialize the bottom tab navigator
const Tab = createBottomTabNavigator();

function BottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: "transparent",
					position: "absolute",
					bottom: 15,
					left: 0,
					borderTopWidth: 1,
					paddingTop: 13,
					height: 80,
					elevation: 0,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "",
					headerShown: false,
					tabBarLabelStyle: { color: "white" },
					tabBarIcon: ({ focused }) => (focused ? <Entypo name="home" size={24} color="#3a86ff" /> : <Entypo name="home" size={24} color="black" />),
				}}
			/>
			<Tab.Screen
				name="Learn"
				component={LearnScreen}
				options={{
					tabBarLabel: "",
					headerShown: false,
					tabBarLabelStyle: { color: "white" },
					tabBarIcon: ({ focused }) => (focused ? <FontAwesome name="microphone" size={24} color="#3a86ff" /> : <FontAwesome name="microphone" size={24} color="black" />),
				}}
			/>
			<Tab.Screen
				name="Plant"
				component={PlantScreen}
				options={{
					tabBarLabel: "",
					headerShown: false,
					tabBarLabelStyle: { color: "white" },
					tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name="flower-tulip" size={24} color="#3a86ff" /> : <MaterialCommunityIcons name="flower-tulip" size={24} color="black" />),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: "",
					headerShown: false,
					tabBarLabelStyle: { color: "white" },
					tabBarIcon: ({ focused }) => (focused ? <FontAwesome name="user" size={24} color="#3a86ff" /> : <FontAwesome name="user" size={24} color="black" />),
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabs;
