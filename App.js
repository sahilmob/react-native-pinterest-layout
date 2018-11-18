import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import Pin from "./src/components/Pin";

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
	}
});
