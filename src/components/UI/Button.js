import React from "react";
import { Text, View, StyleSheet, PixelRatio } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";

export default (Button = props => {
	const pixelRatio = PixelRatio.get();
	console.log("pixelRatio: ", pixelRatio);
	const pixels = PixelRatio.getPixelSizeForLayoutSize(500);
	console.log(pixels);
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
			padding: scale(8),
			borderRadius: 4,
			backgroundColor: "red",
			...btnCustomStyles
		},
		Icon: {
			color: "white",
			fontSize: scale(9),
			...btnIconStyles
		},
		ButtonText: {
			fontSize: scale(10),
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
