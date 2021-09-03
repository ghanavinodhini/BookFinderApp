import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Toolbar() {
  return (
    <View style={styles.toolbarView}>
      <Text style={styles.toolbarText}>
      Open Library Book Finder!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbarView: {
    backgroundColor: "black",
    padding: 10,
  },

  toolbarText: {
    color: "white",
    textAlign: "center",
  },
});
