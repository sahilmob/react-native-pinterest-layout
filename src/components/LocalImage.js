import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

export default (LocalImage = ({ source, originalWidth, originalHeight }) => {
	let windowWidth = Dimensions.get("window").width;
	let widthChange = (windowWidth - 16) / originalWidth;
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
