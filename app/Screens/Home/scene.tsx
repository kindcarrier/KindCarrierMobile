/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';
import { NavigationScreenProp } from 'react-navigation'

import UserData from 'Types/user'
import styles from './styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface HomeProps {
  user: UserData | null,
  isLogined: boolean,
  navigation: NavigationScreenProp<any>,
}

class Home extends Component<HomeProps> {
  componentDidMount() {
    if (!this.props.isLogined) {
      this.props.navigation.navigate('Entry')
    }
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={() => console.log('dfgd')} >
          <Text>Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home