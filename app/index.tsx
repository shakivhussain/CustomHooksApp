import { StyleSheet, Text, View } from "react-native";
import WithoutCustomHooks from "./components/WithoutCustomHooks";
import WithCustomHooks from "./components/WIthCustomHooks";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <WithCustomHooks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
