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
		Button: {
			flexDirection: "row",
			alignItems: "center",
			padding: 8,
			borderRadius: 4,
			backgroundColor: "red",
			...btnCustomStyles
		},
		Icon: {
			color: "white",
			...btnIconStyles
		},
		ButtonText: {
			color: "white",
			...btnTextCustomStyles
		}
	});

	return (
		<View style={styles.Button}>
			{iconName && <Icon name={iconName} style={styles.Icon} />}
			<Text style={styles.ButtonText}>{btnText}</Text>
		</View>
	);
});
