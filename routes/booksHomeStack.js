import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Books from "../components/books/Books";
import BookDetails from "../components/bookDetails/BookDetails";
import SearchHome from "../components/searchHome/SearchHome";
import CheckoutBooks from "../components/checkoutBooks/CheckoutBooks";

const screens = {
  SearchHome:{
    screen:SearchHome,
  },
  Books: {
    screen: Books,
  },
  BookDetails: {
    screen: BookDetails,
  },
  CheckoutBooks:{
    screen: CheckoutBooks,
  },
};
const booksHomeStack = createStackNavigator(screens);

export default createAppContainer(booksHomeStack); 

/* import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import Books from "../components/books/Books";
import BookDetails from "../components/bookDetails/BookDetails";

const Stack = createStackNavigator();

const booksHomeStack = ()=> {
  return(
    <SafeAreaView style={ {flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen>
            name="Books"
            component={Books}
            options={{title:"Books"}}
          </Stack.Screen>
          <Stack.Screen>
            name="BookDetails"
            component={BookDetails}
            options={{title:"BookDetails"}}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default booksHomeStack; */
