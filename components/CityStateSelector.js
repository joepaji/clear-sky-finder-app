import csc from "country-state-city";
import { View, StyleSheet, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import SearchableDropdown from "react-native-searchable-dropdown";
import { GlobalStyles } from "../constants/GlobalStyles";

const colors = GlobalStyles.colors;

const data = [
	{
		name: "React",
		id: 1,
	},
	{
		name: "React Native",
		id: 2,
	},
	{
		name: "Ionic",
		id: 3,
	},
];

const CityStateSelector = () => {
	const [selected, setSelected] = useState();
	const [isKeyboardVisible, setKeyboardVisible] = useState(false);
	
	const selectHandler = (item) => {
		setSelected(item);
	};

	useEffect(() => {
		console.log(selected);
	}, [selected]);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
		  "keyboardDidShow",
		  () => {
			setKeyboardVisible(true);
		  }
		);
		const keyboardDidHideListener = Keyboard.addListener(
		  "keyboardDidHide",
		  () => {
			setKeyboardVisible(false);
		  }
		);
	
		return () => {
		  keyboardDidHideListener.remove();
		  keyboardDidShowListener.remove();
		};
	  }, []);

	return (
		<SearchableDropdown
			onItemSelect={selectHandler}
			containerStyle={styles.pickerContainer}
			onRemoveItem={(item, index) => {
				const items = this.state.selectedItems.filter(
					(sitem) => sitem.id !== item.id
				);
				this.setState({ selectedItems: items });
			}}
			itemStyle={styles.itemContainer}
			itemTextStyle={styles.itemText}
			itemsContainerStyle={ isKeyboardVisible ? { maxHeight: 140 } : {display: 'none'} }
			items={data}
			resetValue={false}
			textInputProps={{
				placeholder: !selected ? "Country" : selected.name,
				placeholderTextColor: colors.accent100,
				underlineColorAndroid: "transparent",
				style: styles.textInputContainer,
				onTextChange: (text) => console.log(text),
				keyboardAppearance: "dark"
			}}
			listProps={{
				nestedScrollEnabled: true,
			}}
		/>
	);
};

export default CityStateSelector;

const styles = StyleSheet.create({
	pickerContainer: {
		width: 150,
		overflow: 'hidden'
	},
	itemContainer: {
		paddingHorizontal: 4,
		paddingVertical: 3,
		backgroundColor: "transparent",
		borderColor: "#bbb",
		borderBottomWidth: .2,
		borderBottomRightRadius: 24,
		borderBottomLeftRadius: 16,
		paddingLeft: 20
	},
	textInputContainer: {
		paddingTop: 10,
		marginBottom: 5,
		borderBottomWidth: 1,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderColor: colors.accent100,
		color: colors.accent100,
		textAlign: 'center'
	},
	itemText: {
		fontSize: 12,
		color: colors.accent100,
		fontWeight: '300',
		letterSpacing: 1
	}
});
