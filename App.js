import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Toolbar from "./components/toolbar/Toolbar";
import Books from "./components/books/Books";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Toolbar /> */}
      <Books />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
    height: Dimensions.get("window").height,
  },
});
