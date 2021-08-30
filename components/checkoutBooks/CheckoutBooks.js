import React from 'react';
import Toolbar from "../../components/toolbar/Toolbar";
import {CheckoutCountContext} from "../helper/CountProvider";
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput,
    Button,
  } from "react-native";

function CheckoutBooks() {

    //const [checkoutCount,setCheckoutCount] = useState(props.navigation.state.params.BookInfo)
    
    return (
<CheckoutCountContext.Consumer>
    {
        cbCount=>
        <View style={styles.container}>
            <View>
                <Toolbar />
            </View>
            <Text>No. of checkedout Books:{cbCount.checkCount}</Text>
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
})

export default CheckoutBooks
