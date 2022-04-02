import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";

const pin = (props) => {
	const { image, title } = props.pin;

	const [ratio, setRatio] = useState(1 / 2);

	const onLike = () => {};

	Image.getSize(image, (width, height) => setRatio(width / height));

	useEffect(() => {
		Image.getSize(image, (width, height) => setRatio(width / height));
	}, [image]);

	return (
		<View style={styles.pin}>
			<View>
				<Image
					source={{
						uri: image,
					}}
					style={(styles.image, { aspectRatio: ratio })}
				/>

				<Pressable onPress={onLike} style={styles.heartBtn}>
					<AntDesign name="hearto" size={16} color="black" />
				</Pressable>
			</View>

			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	pin: {
		width: "100%",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
	image: {
		width: "100%",
		borderRadius: 25,
	},
	heartBtn: {
		backgroundColor: "#D3CFD4",
		position: "absolute",
		bottom: 10,
		right: 10,
		padding: 5,
		borderRadius: 50,
	},
});

export default pin;
