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
import Entry from 'Screens/Entry'
import SignUp from 'Screens/SignUp'
import LogIn from 'Screens/LogIn'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Entry: {
      screen: Entry,
    },
    SignUp: {
      screen: SignUp,
    },
    LogIn: {
      screen: LogIn,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator)