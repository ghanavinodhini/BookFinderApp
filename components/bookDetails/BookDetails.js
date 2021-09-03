import React from "react";
import { StyleSheet, Text, View,Dimensions,Button, SafeAreaView, ScrollView,FlatList} from "react-native";
import Toolbar from "../../components/toolbar/Toolbar";
import {CheckoutCountContext} from "../helper/CountProvider";


 function BookDetails({ navigation }) {
  const  details  = navigation.state.params.BookInfo
  const languages = details.language;
  const publishYears = details.publish_year; 
  
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

  const renderAuthor = () => {
    if (typeof details.author_name === 'undefined'){
    return(
      <Text>Author: N/A</Text>
    )
    }else{
      return(
    <Text>Author: {details.author_name}</Text>
    )}
  }

  const renderLanguages = () => {
    if (typeof details.languages === 'undefined'){
    return(
      <Text>Languages: N/A</Text>
    )
    }else{
      return(
    <Text>Languages: {languages && (
      <FlatList
             data={languages}
             renderItem={renderItem}
             keyExtractor={(item, index) => index.toString()} />
       )}
       </Text>
      )}
  }

  const displayPublishYears = () => {
    if (typeof details.publish_year === 'undefined'){
      return(
        <Text>Publish Years: N/A</Text>
      )
      }else{
        return(
          <Text>Publish Year:{publishYears && (
            <FlatList style={{marginHorizontal:10}}
            horizontal
            ItemSeparatorComponent={renderSeparator}
            data = {publishYears}
            renderItem={({ item }) => <RenderPublishYears years={item} />}
            keyExtractor={(item,index)=>index.toString()}
            />
          )}</Text>
        )}
  }

  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <View>
        <Toolbar />
      </View>
      <Text style={styles.title}>{details.title}</Text>
      <Text>Suggest Title:{details.title_suggest}</Text>
      {renderAuthor()}
      {displayPublishYears()}
      {renderLanguages()}
      <Text>EBook Count:{details.ebook_count_i}</Text>
      <Text>Type: {details.type}</Text>
   
      <CheckoutCountContext.Consumer>
    {
        cbCount=>
        <>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>No. of checkedout Books:{cbCount.checkCount}</Text>
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
  },
  countContainer:{
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:"#faebd7",
    marginVertical:5,
    marginBottom:5,
  },
  countText:{
    fontSize:16,
  }
  
})
export default BookDetails;