import React, { useState, useEffect } from "react";
import Toolbar from "../../components/toolbar/Toolbar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { CheckoutCountContext } from "../helper/CountContext";

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
            {renderAuthor(item)}
            {/* <Text style={styles.author}>
              Author:  {item.author_name}
            </Text> */}
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const renderAuthor = (item) => {
    if (typeof item.author_name === 'undefined'){
    return(
      <Text style={styles.author}>Author: N/A</Text>
    )
    }else{
      return(
    <Text style={styles.author}>Author: {item.author_name}</Text>
    )}
  }
  
  return (
    isLoading ? 
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="blue" animating />
    </View> 
              :
    <SafeAreaView>
      <View>
        <Toolbar />
      </View>
        
    <View style={styles.countContainer}>
      <CheckoutCountContext.Consumer>
    {
        cbCount=>
        <View>
          <Text style={styles.countText}>No. of checkedout Books:{cbCount.checkCount}</Text>
        </View>
    }
    </CheckoutCountContext.Consumer>
    </View>
    <ScrollView style={{marginVertical:30}}>
      <View style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    justifyContent:"center",
    alignItems:"center",
    marginTop: 20,
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
