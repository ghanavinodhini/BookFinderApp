
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Navigator from "./routes/booksHomeStack";
import { CountProvider } from "./components/helper/CountProvider";

export default function App() {
  return (
     <View style={styles.container}>
       <CountProvider>
       <Navigator /> 
       </CountProvider>
       
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
    height: Dimensions.get("window").height,
  },
});
