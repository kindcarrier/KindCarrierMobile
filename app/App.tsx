/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */


import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from 'Screens/Home'
import SignUp from 'Screens/SignUp'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator)