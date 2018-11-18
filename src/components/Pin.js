import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Pin extends Component {
	render() {
		return (
			<View style={styles.PinContainer}>
				<View style={styles.PinHeader}>
					<View style={styles.UtilityNav}>
						<Icon name="chevron-left" size={20} />
						<Icon name="heart" size={20} />
						<Icon name="paper-plane" size={20} />
						<Icon name="ellipsis-h" size={20} />
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<Icon name="thumbtack" style={styles.PinIcon} />
							<Text style={styles.PinButtonText}>Save</Text>
						</View>
					</View>
				</View>
				<View style={styles.PinContent}>
					<Text style={styles.ImagePlaceholder}>Image Placeholder</Text>
				</View>
				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>Save</Text>
						<Text style={[styles.PinMetaText, styles.TextBold]}>
							website.com
						</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={[styles.PinButton, styles.UtilityButton]}>
							<Text style={[styles.PinButtonText, styles.UtilityButtonText]}>
								Visit
							</Text>
						</View>
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
		padding: 10,
		flex: 1
	},
	UtilityNav: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between"
	},
	PinButtonContainer: {
		flex: 1,
		alignItems: "flex-end"
	},
	PinButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "red",
		padding: 8,
		borderRadius: 4
	},
	PinIcon: {
		transform: [{ rotate: "45deg" }],
		marginRight: 7,
		color: "white"
	},
	PinButtonText: {
		color: "white",
		fontWeight: "bold"
	},
	PinContent: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 8
	},
	ImagePlaceholder: {
		backgroundColor: "#1e1e1e",
		flex: 1,
		alignSelf: "stretch",
		borderRadius: 6
	},
	PinMeta: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 16,
		paddingHorizontal: 8
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
