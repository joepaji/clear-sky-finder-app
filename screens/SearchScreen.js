import {
	StyleSheet,
	View,
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Dimensions,
} from "react-native";
import SearchComponent from "../components/SearchComponent";

const deviceHeight = Dimensions.get("window").height;

const SearchScreen = () => {
	return (
		<KeyboardAvoidingView style={{ top: deviceHeight / 2.5 }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<SearchComponent />
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
