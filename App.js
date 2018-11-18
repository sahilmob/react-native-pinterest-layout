import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, View } from "react-native";

import Pin from "./src/components/Pin";

const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
	android:
		"Double tap R on your keyboard to reload,\n" +
		"Shake or press menu button for dev menu"
});

export default class App extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Pin />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
