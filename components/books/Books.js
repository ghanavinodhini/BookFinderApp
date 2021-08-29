import React, { useState, useEffect } from "react";
import Toolbar from "../../components/toolbar/Toolbar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import BookDetails from "../bookDetails/BookDetails";

export default function Books({ navigation }) {
  const [textVal, setText] = useState("");
  const [allData, setAllData] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [author,setAuthor] = useState("");
  //const [dataList,setDataList] = useState([])

  const  searchDetails  = navigation.state.params.SearchInfo;

  let jsonData;

  const onTextChange = (searchText) => {
    /* if (searchText === "") {
      console.log("No value entered");
    }*/
    let value = searchText.toLowerCase();

    console.log("Entered in searchbox:" + value);
    setText(value);
    console.log("Entered text:", textVal);
  };

  const FetchBooks = async () => {
    const booksData = await fetch(
      `http://openlibrary.org/search.json?q=` + searchDetails
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("JSON value:", json.docs);
        jsonData = json.docs;
        setAllData(jsonData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    FetchBooks();
  }, []);

  const pressRow = (book) => {
    navigation.navigate("BookDetails", { 'BookInfo': book });
    console.log("SELECTED BOOK:", book);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          pressRow(item);
        }}
      >
        <View style={styles.row}>
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.author}>
              Author:  
              {item.author_name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (

    Object.keys(allData).length == 0 ? 
    <View>
      <Text> No DATA FOUND. GO BACK AND SEARCH AGAIN</Text>
    </View> 
              :  
    isLoading ? 
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="blue" animating />
    </View> 
              :
    <ScrollView>
    <View style={styles.container}>
      <Text>
        {/* {Object.keys(allData).map((item) => {
          {
            console.log("Item value:", { item });
          }
        })} */}
        {console.log("All Data ", allData)}
        {/* {allData && (
          <FlatList
            data={allData}
            renderItem={renderItem}
            keyExtractor={(item) => item.docs[0].author_name.toString()}
          />
        )} */}
        {allData && (
          <FlatList
            data={allData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
  },

  textInput: {
    height: 40,
    width: 200,
    marginTop: 10,
    borderColor: "blue",
    borderWidth: 1,
    alignSelf: "center",
  },

  indicator:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

  row: {
    flex:1,
    flexDirection:'row',
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#d3d3d3",
    marginTop: 10,
    marginBottom: 3,
    marginLeft:10,
    width:Dimensions.get("window").height,
    alignItems: "center",
  },
  bookInfo: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  bookTitle: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  author: {
    color: "red",
    fontSize: 12,
    alignSelf: "center",
  },

  publishYear: {
    color: "blue",
    fontSize: 10,
    alignSelf: "center",
  },
});
