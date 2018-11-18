import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default (Button = props => {
	const {
		iconName,
		btnText,
		btnCustomStyles,
		btnTextCustomStyles,
		btnIconStyles
	} = props;

	const styles = StyleSheet.create({
		PinButton: {
			flexDirection: "row",
			alignItems: "center",
			padding: 8,
			borderRadius: 4,
			backgroundColor: "red",
			...btnCustomStyles
		},
		PinIcon: {
			color: "white",
			...btnIconStyles
		},
		PinButtonText: {
			color: "white",
			...btnTextCustomStyles
		}
	});

	return (
		<View style={styles.PinButton}>
			{iconName ? <Icon name={iconName} style={styles.PinIcon} /> : null}
			<Text style={styles.PinButtonText}>{btnText}</Text>
		</View>
	);
});
