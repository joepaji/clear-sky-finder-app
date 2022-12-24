import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants/GlobalStyles";

const colors = GlobalStyles.colors;

const Button = ({ children, type, onPress }) => {
	let buttonColor;
	if (type === "action") {
		buttonColor = colors.accent100;
	} else {
		buttonColor = colors.accent300;
	}
	return (
		<Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
			<View style={[styles.container, { backgroundColor: buttonColor }]}>
				<Text>{children}</Text>
			</View>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: 100,
		height: 30,
		borderRadius: 8,
	},
    pressed: {
        opacity: 0.6
    }
});
