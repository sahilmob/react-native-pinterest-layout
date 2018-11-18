import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

export default (LocalImage = ({ source, originalWidth, originalHeight }) => {
	let windowWidth = Dimensions.get("window").width;
	let widthChange = (windowWidth - scale(32)) / originalWidth;
	let newWidth = originalWidth * widthChange;
	let newHeight = originalHeight * widthChange;

	const styles = StyleSheet.create({
		imgStyles: {
			width: newWidth,
			height: newHeight
		}
	});

	return <Image source={source} style={styles.imgStyles} />;
});
