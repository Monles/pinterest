import { StyleSheet, ScrollView, FlatList } from "react-native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Pin from "../components/Pin";
import pins from "../assets/data/pins";

export default function HomeScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={{ backgroundColor: "#94ffa955", flex: 1 }}>
					<Pin pin={pins[0]} />
				</View>
				<View style={{ backgroundColor: "#cd94ff55", flex: 1 }}>
					<Pin pin={pins[1]} />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
	},
});
