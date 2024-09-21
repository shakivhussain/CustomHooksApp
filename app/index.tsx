import { StyleSheet, Text, View } from "react-native";
import WithoutCustomHooks from "./components/WithoutCustomHooks";
import Form from "./components/Form";
import useFormInput from "./hooks/useFormInput";

export default function Page() {



  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Form />
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
