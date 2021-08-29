import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,Dimensions,Button, SafeAreaView, ScrollView} from "react-native";

 function BookDetails({ navigation }) {
  //const navigation = props.getParam('itemId');
  console.log("inside book details:", navigation.state.params.BookInfo);
  const  details  = navigation.state.params.BookInfo
  console.log("Details:",details);
  //const { params } = route;
  
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <Text>Book Details Screen</Text>
      {/* <Text>ItemId:{params.itemId}</Text> */}
      {/* <Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}</Text> */}
      <Text>Book Title: {details.title}</Text>
      <Text>Author: {details.author_name}</Text>
      <Text>Languages: {details.language}</Text>
      <Text>Description: {details.text}</Text>
   
    <View style={styles.fitToText}>
      <Button style={styles.checkoutBtn} title="ADD TO CHECKOUT" onPress={() => console.log('button pressed')} />
    </View>
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
    marginVertical: 8,
  },

})
export default BookDetails;