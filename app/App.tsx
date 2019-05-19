/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */


import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  NavigationScreenProp
} from "react-navigation"
import Home from 'Screens/Home'
import Entry from 'Screens/Entry'
import SignUp from 'Screens/SignUp'
import LogIn from 'Screens/LogIn'
import Map from 'Screens/Map'
import Chat from 'Screens/Chat'
import Profile from 'Screens/Profile'
import EditProfile from 'Screens/EditProfile'
import CreateNegotiation from 'Screens/CreateNegotiation'

const ProfileNavigator = createStackNavigator(
  {
    Profile: {
      screen: Profile,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
  }
)

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    CreateNegotiation: {
      screen: CreateNegotiation,
    },
  },
  {
    headerMode: 'none',
  }
)

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: ({ navigation }: any) => ({
      title: 'Главная',
    }),
  },
  // Map: {
  //   screen: Map,
  //   navigationOptions: ({ navigation }: any) => ({
  //     title: 'Карта',
  //   }),
  // },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }: any) => ({
      title: 'Чат',
    }),
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: ({ navigation }: any) => ({
      title: 'Профиль',
    }),
  },
})

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
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