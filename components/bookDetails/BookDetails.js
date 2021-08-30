import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,Dimensions,Button, SafeAreaView, ScrollView,FlatList} from "react-native";
import CheckoutBooks from "../checkoutBooks/CheckoutBooks";
import Books from "../../components/books/Books";
import Toolbar from "../../components/toolbar/Toolbar";
import {CheckoutCountContext} from "../helper/CountProvider";

import { CountProvider } from "../../components/helper/CountProvider";

 function BookDetails({ navigation }) {
  //const navigation = props.getParam('itemId');
  console.log("inside book details:", navigation.state.params.BookInfo);
  const  details  = navigation.state.params.BookInfo
  //const [languages,setLanguages] = useState(details.language !== "" ? details.language : "N/A");
  const languages = details.language;
  const publishYears = details.publish_year; 
  
  const[count,setCount] = useState(2);
  
  console.log("Details:",details);
  console.log("Details Language:",languages);
  console.log("Details PublishYear:",publishYears);
  //const { params } = route;
  
  const renderItem = ({ item }) => {
    return (
      <View>
      <Text>{item}</Text>
    </View>
    )
  }

  const RenderPublishYears = ({years}) => (
    <View>
      <Text>{years}</Text>
    </View>
  );

  const renderSeparator = () => (
      <Text>,</Text>
  );

  /*const addCheckoutBooks = () => {
    console.log("Inside addCheckoutBooks");
    navigation.navigate("CheckoutBooks");
  }*/

  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <View>
        <Toolbar />
      </View>
      
      {/* <CountProvider>
        <CheckoutBooks />
      </CountProvider> */}
       {/* <CheckoutCountContext.Provider value={{count,setCount}}>
        <CheckoutBooks />
      </CheckoutCountContext.Provider>  */}
      {/* <Text>ItemId:{params.itemId}</Text> */}
      {/* <Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}</Text> */}
      <Text style={styles.title}>{details.title}</Text>
      <Text>Suggest Title:{details.title_suggest}</Text>
      <Text>Author: {details.author_name}</Text>
      <Text>Publish Year:{publishYears && (
        <FlatList style={{marginHorizontal:10}}
        horizontal
        ItemSeparatorComponent={renderSeparator}
        data = {publishYears}
        renderItem={({ item }) => <RenderPublishYears years={item} />}
        keyExtractor={(item,index)=>index.toString()}
        />
      )}</Text>
      <Text>Languages: {languages && (
     <FlatList
            data={languages}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()} />
      )}
      </Text>
      <Text>EBook Count:{details.ebook_count_i}</Text>
      <Text>Type: {details.type}</Text>
   
      <CheckoutCountContext.Consumer>
    {
        cbCount=>
        <>
        <View>
          <Text>No. of checkedout Books:{cbCount.checkCount}</Text>
        </View>
        <View style={styles.fitToText}>
        <Button style={styles.checkoutBtn} title="ADD TO CHECKOUT" onPress={() => {
          cbCount.updateCount();
          navigation.navigate("CheckoutBooks");

        }} />
      </View>
      </>
    }
    </CheckoutCountContext.Consumer>
    
    </View>
    </ScrollView>
    </SafeAreaView>
  );
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
  title: {
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:24,
    marginVertical: 8,
  },
  listStyle:{
    width:100,
    padding:2,
  }
  
})
export default BookDetails;