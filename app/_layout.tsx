import {
  Slot,
} from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Layout() {
  return <View style={styles.container}><View style={styles.textContainer}><Text>XD</Text></View><Slot /></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
