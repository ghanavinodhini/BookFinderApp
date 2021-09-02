import React, { useState, useEffect, useContext } from "react";
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
import { CheckoutCountContext } from "../helper/CountProvider";

export default function Books({ navigation }) {
  
  const [allData, setAllData] = useState({});
  const [isLoading,setIsLoading] = useState(true);

  const  searchDetails  = navigation.state.params.SearchInfo;
  let jsonData;

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
    
    isLoading ? 
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="blue" animating />
    </View> 
              :
    <ScrollView>
    <View style={styles.container}>
      <View>
        <Toolbar />
      </View>
      <CheckoutCountContext.Consumer>
    {
        cbCount=>
        <View>
          <Text>No. of checkedout Books:{cbCount.checkCount}</Text>
        </View>
    }
    </CheckoutCountContext.Consumer>
      <Text>
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
    color: "blue",
    fontSize: 14,
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
});
