import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Books from "./components/books/Books";
import Navigator from "./routes/booksHomeStack";

export default function App() {
  return (
     <View style={styles.container}>
          
       <Navigator /> 
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
