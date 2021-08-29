import React, {useState} from 'react';
import Toolbar from "../../components/toolbar/Toolbar";
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput,
    Button,
  } from "react-native";

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
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      height: Dimensions.get("window").height,
    },
    fitToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:"center",
      },
      textInput: {
        height: 40,
        width: 200,
        marginTop: 10,
        marginBottom:5,
        borderColor: "blue",
        borderWidth: 1,
        alignSelf: "center",
      },
})

export default SearchHome
