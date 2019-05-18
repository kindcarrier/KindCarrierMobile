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
import MapView from 'Components/Map'

import UserData from 'Types/user'
import styles from './styles'

interface MapProps {
  navigation: NavigationScreenProp<any>,
}

const { width, height } = Dimensions.get('screen')

class Map extends Component<MapProps> {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          width={width}
          height={height}
        />
      </View>
    );
  }
}

export default Map