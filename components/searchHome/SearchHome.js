import React, {useState} from 'react';
import Toolbar from "../../components/toolbar/Toolbar";
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput,
    Button,
    Image,
  } from "react-native";
  import {CheckoutCountContext} from "../helper/CountContext";
  import logo from "../../images/books.svg";

function SearchHome(props) {
    const [textVal, setText] = useState("");
    let searchValue;

    const onTextChange = (searchText) => {
        searchValue = searchText.toLowerCase();
        setText(searchValue);
      };

      const getBooks = () => {
        props.navigation.navigate("Books", { 'SearchInfo': textVal });
      };
    
    return (
    <View style={styles.container}>
        <View>
            <Toolbar />
        </View>
        <CheckoutCountContext.Consumer>
    {
        cbCount=>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>No. of checkedout Books:{cbCount.checkCount}</Text>
        </View>
    }
    </CheckoutCountContext.Consumer>
      <View style={styles.inputContainer}>
        <Image source={logo} style={{width:150,height:150}} />
        <TextInput
            style={styles.textInput}
            placeholder="Search Books..."
            onChangeText={(text) => onTextChange(text)}
        />
        <View style={styles.fitToText}>
        <Button title="GOTO BOOKLIST" onPress={() => {
            getBooks();
            }} />
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      height: Dimensions.get("window").height,
    },
    inputContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    fitToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:"center",
    },
    textInput: {
        height: 60,
        width: 300,
        margin: 30,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius:6,
        paddingHorizontal:15,
        alignSelf: "center",
        fontSize:16,
    },
    countContainer:{
        backgroundColor:'#faebd7',
        position:'absolute',
        top:50,
        right:10,
    },
    countText:{
        fontSize:16,
    }
})

export default SearchHome
