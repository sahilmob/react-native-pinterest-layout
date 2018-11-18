import React, { Component } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";

import Pin from "./src/components/Pin";

export default class App extends Component {
	state = {
		pins: [
			{
				source: require("./src/assets/img/2.jpeg"),
				originalWidth: 1920,
				originalHeight: 2880
			},
			{
				source: require("./src/assets/img/1.jpeg"),
				originalWidth: 1920,
				originalHeight: 1280
			}
		],
		pinsObj: {
			first: {
				source: require("./src/assets/img/2.jpeg"),
				originalWidth: 1920,
				originalHeight: 2880
			},
			second: {
				source: require("./src/assets/img/1.jpeg"),
				originalWidth: 1920,
				originalHeight: 1280
			}
		}
	};

	render() {
		const { pins, pinsObj } = this.state;
		return (
			<ScrollView style={styles.container}>
				{/* This is used when data is array */}
				{/* {pins.map(pin => (
					<Pin
						key={pin.source}
						source={pin.source}
						originalWidth={pin.originalWidth}
						originalHeight={pin.originalHeight}
					/>
        ))} */}

				{/* this is used when data is object */}
				{Object.keys(pinsObj).map(k => (
					<Pin
						key={pinsObj[k].source}
						source={pinsObj[k].source}
						originalWidth={pinsObj[k].originalWidth}
						originalHeight={pinsObj[k].originalHeight}
					/>
				))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F5FCFF"
	}
});
