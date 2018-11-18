import React, { Component } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";
export default class LocalImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: Dimensions.get("window").width
		};
		Dimensions.addEventListener("change", this.updateWidth);
	}
	componentWillUnmount() {
		Dimensions.removeEventListener("change", this.updateWidth);
	}

	updateWidth = dims => {
		this.setState({
			windowWidth: dims.window.width
		});
	};

	render() {
		const { source, originalWidth, originalHeight } = this.props;
		let windowWidth = this.state.windowWidth;
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
	}
}
