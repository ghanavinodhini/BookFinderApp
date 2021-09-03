
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Navigator from "./routes/booksHomeStack";
import { CountContext } from "./components/helper/CountContext";

export default function App() {
  return (
     <View style={styles.container}>
       <CountContext>
          <Navigator /> 
       </CountContext>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "brown",
    height: Dimensions.get("window").height,
  },
});
