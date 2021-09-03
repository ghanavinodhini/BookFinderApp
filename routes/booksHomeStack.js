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

