import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "./src/Timer.tsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Timer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
