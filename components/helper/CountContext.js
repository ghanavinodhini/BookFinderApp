import React, { useState } from "react";
import {
    StyleSheet,
    Dimensions,
    View,
  } from "react-native";
  

const CheckoutCountContext = React.createContext();

const CountContext = (props) => {
const[checkCount,setCheckCount] = useState(0);

const updateCount = () => {
    setCheckCount(checkCount + 1);
    console.log("UpdateCount function value count:",checkCount);
    }

    return(
        <View style={styles.container}>
            <CheckoutCountContext.Provider value={{checkCount,updateCount}}>
                {props.children} 
            </CheckoutCountContext.Provider>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      height: Dimensions.get("window").height,
    },
})

export {CountContext,CheckoutCountContext};