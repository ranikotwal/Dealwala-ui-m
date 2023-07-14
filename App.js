import React from "react";
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import LoginPage from "./src/Screens/LoginPage";
import SearchScreen from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
  {
    // Login: LoginPage,
    Search: SearchScreen
  },

  // {
  //   initialRouteName: 'Search',
  //   defaultNavigationOptions: {
  //     title: '',
  //   },
  // }
);



export default createAppContainer(navigator);
  