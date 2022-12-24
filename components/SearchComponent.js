import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/GlobalStyles";
import Button from "./Button";
import CityStateSelector from "./CityStateSelector";
import TextInputField from "./TextInputField";

const colors = GlobalStyles.colors;

function hexToRgbA(hex, transparancy) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split("");
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = "0x" + c.join("");
		return (
			"rgba(" +
			[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
			`,${transparancy})`
		);
	}
	throw new Error("Bad Hex");
}

const SearchComponent = () => {
	let email = "test";
	return (
		<View style={styles.containerShadow}>
			<View style={styles.container}>
				<View style={styles.inputs}>
					<View style={{}}>
						<CityStateSelector />
					</View>
					<View style={{}}>
						<Text>SearchBox</Text>
					</View>
				</View>
				<View style={styles.buttons}>
					<View style={styles.searchButton}>
						<Button type='action'>Search</Button>
					</View>
					<View style={styles.resetButton}>
						<Button type='cancel'>Reset</Button>
					</View>
				</View>
			</View>
		</View>
	);
};

export default SearchComponent;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		borderWidth: 0.4,
		width: "98%",
		height: "98%",
		marginTop: 5,
		borderRadius: 8,
		backgroundColor: hexToRgbA(colors.primary800, 0.5),
		borderColor: colors.accent200,
		paddingTop: 30,
	},
	containerShadow: {
		width: "80%",
		height: 400,
		alignItems: "center",
		borderWidth: 0,
		borderRadius: 3,
		elevation: 5,
	},
	inputs: {
		width: "100%",
		flex: 5,
		alignItems: "center",
	},
	buttons: {
		flex: 1,
		flexDirection: "row",
		padding: 16,
	},
	searchButton: {
		marginRight: 8,
	},
	resetButton: {
		marginLeft: 8,
		zIndex: 0,
	},
});
