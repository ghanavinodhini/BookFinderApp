import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";

export default function Books() {
  const [textVal, setText] = useState("");
  const [allData, setAllData] = useState({});
  //const [dataList,setDataList] = useState([])

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
      `http://openlibrary.org/search.json?q=` + "the lord of the rings"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("JSON value:", json.docs);
        setAllData(json.docs);
      });
  };

  useEffect(() => {
    FetchBooks();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.author_name}</Text>
        <Text>{item.title}</Text>
        <Text>{item.first_publish_year}</Text>
        <Text>{item.subject}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search Books..."
        //value={text}
        onChangeText={(text) => onTextChange(text)}
      />
      <Text>
        {Object.keys(allData).map((item) => {
          {
            console.log("Item value:", { item });
          }
        })}
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
            keyExtractor={(item, index) => item[0]}
          />
        )}
      </Text>
    </View>
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
    borderColor: "blue",
    borderWidth: 1,
    alignItems: "center",
  },
});
