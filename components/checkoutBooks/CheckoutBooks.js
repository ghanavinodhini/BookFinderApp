import React from 'react';
import Toolbar from "../../components/toolbar/Toolbar";
import {CheckoutCountContext} from "../helper/CountProvider";
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    Button,
  } from "react-native";

  
function CheckoutBooks(props) {

    return (
    <CheckoutCountContext.Consumer>
    {
        cbCount=>
        <View style={styles.container}>
            <View>
                <Toolbar />
            </View>
            <View style={styles.countContainer}>
                <Text> YOUR CHECKOUT LIMITS IS MAXIMUM 5 BOOKS</Text>
                {
                cbCount.checkCount > 5 ? 
                <Text>
                     You reached maximum limit. Please Return few books to checkout.
                </Text> :
                
                <Text>
                    <Text style={styles.countText}>Number of checkedout Books:{cbCount.checkCount}</Text>
                    <View style={styles.fitToText}>
                        <Button title="GOTO BOOKS LIST" onPress={() => {
                        props.navigation.navigate("Books");
                        }} />
                    </View>
                </Text>
                
                }
            </View>
        </View>
    }
    </CheckoutCountContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      height: Dimensions.get("window").height,
    },
    countContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#faebd7",
    },
    countText:{
        fontSize:18,
    },
    fitToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:"center",
      },

})

export default CheckoutBooks
