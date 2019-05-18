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
import {Dimensions, Text, View, TouchableOpacity} from 'react-native';
import { NavigationScreenProp } from 'react-navigation'
import Map from 'Components/Map'

import UserData from 'Types/user'
import styles from './styles'

interface HomeProps {
  user: UserData | null,
  isLogined: boolean,
  navigation: NavigationScreenProp<any>,
}

const { width, height } = Dimensions.get('screen')

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
        <Map
          width={width}
          height={height}
        />
      </View>
    );
  }
}

export default Home