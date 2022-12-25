import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	Image,
	ImageBackground,
	Dimensions,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import WatchlistScreen from "./screens/WatchlistScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { GlobalStyles } from "./constants/GlobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const colors = GlobalStyles.colors;

export default function App() {
	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: "transparent",
		},
	};
	return (
		<>
			<StatusBar style='light' />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.navigatorContainer}>
					<Image
						source={require("./assets/images/background.jpeg")}
						style={styles.background}
					/>
					<NavigationContainer>
						<Tab.Navigator
							initialRouteName='Search'
							sceneContainerStyle={styles.navigator}
							screenOptions={({ route }) => ({
								tabBarIcon: ({ focused, color, size }) => {
									let iconName;
									if (route.name === "Search") {
										iconName = focused
											? "search"
											: "search-sharp";
									} else if (route.name === "Watchlist") {
										iconName = focused
											? "list"
											: "list-outline";
									}
									return (
										<Ionicons
											name={iconName}
											size={size}
											color={color}
										/>
									);
								},

								tabBarStyle: styles.tab,
								headerStyle: styles.header,
								headerShadowVisible: false,
								headerTintColor: colors.accent100,
								tabBarActiveTintColor: colors.accent100,
								tabBarInactiveTintColor: colors.accent200,
								tabBarHideOnKeyboard: true,
							})}
						>
							<Tab.Screen
								name='Search'
								component={SearchScreen}
							/>
							<Tab.Screen
								name='Watchlist'
								component={WatchlistScreen}
							/>
						</Tab.Navigator>
					</NavigationContainer>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}

const styles = StyleSheet.create({
	navigatorContainer: {
		flex: 1,
	},
	navigator: {
		backgroundColor: "transparent",
	},
	tab: {
		backgroundColor: colors.primary800,
		borderTopWidth: 0,
	},
	header: {
		backgroundColor: colors.primary800,
		borderBottomWidth: 0,
	},
	background: {
		position: "absolute",
		left: 0,
		top: 0,
		width: "200%",
		height: 900,
	},
});
