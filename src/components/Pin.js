import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";

import Button from "./UI/Button";
import LocalImage from "./LocalImage";

export default class Pin extends Component {
	render() {
		const { source, originalWidth, originalHeight } = this.props;
		return (
			<View style={styles.PinContainer}>
				<View style={styles.PinHeader}>
					<View style={styles.UtilityNav}>
						<Icon name="chevron-left" size={scale(20)} />
						<Icon name="heart" size={scale(20)} />
						<Icon name="paper-plane" size={scale(20)} />
						<Icon name="ellipsis-h" size={scale(20)} />
					</View>
					<View style={styles.PinButtonContainer}>
						<Button
							iconName="thumbtack"
							btnText="Save"
							btnIconStyles={styles.PinButtonIcon}
						/>
					</View>
				</View>
				<View style={styles.PinContent}>
					<LocalImage
						source={source}
						originalWidth={originalWidth}
						originalHeight={originalHeight}
					/>
				</View>
				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>Save</Text>
						<Text style={[styles.PinMetaText, styles.TextBold]}>
							website.com
						</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<Button
							btnText="Visit"
							btnCustomStyles={styles.UtilityButton}
							btnTextCustomStyles={styles.UtilityButtonText}
						/>
					</View>
				</View>
				<View style={styles.PinUser}>
					<View style={styles.PinUserAvatar}>
						<Text>Placeholder</Text>
					</View>
					<View style={styles.PinUserContainer}>
						<Text style={styles.PinUserText}>
							<Text style={styles.TextBold}>User Name</Text> saved to{" "}
							<Text style={styles.TextBold}>Space</Text>
						</Text>
						<Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	PinContainer: {
		flex: 1,
		alignSelf: "stretch"
	},
	PinHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: scale(10),
		paddingHorizontal: scale(16),
		minHeight: scale(50)
	},
	UtilityNav: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between"
	},
	PinButtonIcon: {
		transform: [{ rotate: "45deg" }],
		marginRight: 7,
		color: "white"
	},
	PinButtonContainer: {
		flex: 1,
		alignItems: "flex-end"
	},
	PinContent: {
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: scale(16)
	},
	ImagePlaceholder: {
		backgroundColor: "#1e1e1e",
		flex: 1,
		alignSelf: "stretch",
		borderRadius: 6
	},
	PinMeta: {
		flex: 1,
		minHeight: 70,
		flexDirection: "row",
		paddingVertical: 16,
		paddingHorizontal: scale(16)
	},
	PinMetaTextContainer: {},
	UtilityButton: {
		backgroundColor: "#cecece",
		paddingHorizontal: 18
	},
	UtilityButtonText: {
		color: "#1e1e1e",
		fontWeight: "bold"
	},
	PinUserContainer: {},
	PinUser: {
		flex: 5,
		flexDirection: "row",
		paddingHorizontal: 8
	},
	PinUserAvatar: {
		width: 50,
		height: 50,
		backgroundColor: "black",
		borderRadius: 25,
		marginRight: 8
	},
	TextBold: {
		fontWeight: "bold"
	}
});
