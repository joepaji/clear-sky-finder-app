import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/GlobalStyles";

const colors = GlobalStyles.colors;

const TextInputField = ({ title, ...props }) => {
	return (
		<View style={styles.container}>
			<View style={styles.text}>
				<Text style={{ color: "white" }}>Test</Text>
			</View>
			<View style={styles.border}>
				<TextInput
					style={styles.input}
					placeholder={title}
					placeholderTextColor='#777'
					{...props}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '80%',
		marginVertical: 10,
	},
	border: {
		zIndex: 0,
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		overflow: "hidden",
	},
	input: {
		height: 30,
		fontSize: 16,
		paddingHorizontal: 20,
		color: colors.accent100,
	},
	text: {
		zIndex: 1,
		position: "absolute",
		marginTop: -10,
		marginLeft: 8,
		paddingLeft: 4,
		paddingRight: 8,
		backgroundColor: colors.primary700,
	},
});

export default TextInputField;
