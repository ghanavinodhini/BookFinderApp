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
  import {CheckoutCountContext} from "../helper/CountProvider";
  import logo from "../../images/books.svg";

function SearchHome(props) {
    const [textVal, setText] = useState("");
    let searchValue;

    console.log("Inside searchhome props:",props);
    const onTextChange = (searchText) => {
        searchValue = searchText.toLowerCase();
        console.log("Entered in searchbox:" + searchValue);
        setText(searchValue);
        console.log("Entered text:", textVal);
      };

      const getBooks = () => {
          console.log("Inside GetBooks");
        props.navigation.navigate("Books", { 'SearchInfo': textVal });
        console.log("SEARCHED BOOK:", textVal);
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
        height: 40,
        width: 200,
        marginTop: 30,
        marginBottom:5,
        borderColor: "blue",
        borderWidth: 1,
        alignSelf: "center",
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
