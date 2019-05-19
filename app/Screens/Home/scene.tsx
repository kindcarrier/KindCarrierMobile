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
import {Dimensions, Text, View, TouchableOpacity, Alert} from 'react-native';
import { NavigationScreenProp } from 'react-navigation'
import { Marker } from 'react-native-maps'
import MapView from 'Components/Map'
import fetchNegotiations from 'Api/fetchNegotiations'
import Negotiation from 'Types/negotiation'

import UserData from 'Types/user'
import styles from './styles'

interface HomeProps {
  user: UserData | null,
  isLogined: boolean,
  navigation: NavigationScreenProp<any>,
}

interface HomeState {
  negotiations: Array<Negotiation>
}

const { width, height } = Dimensions.get('screen')

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      negotiations: []
    }
  }

  async componentDidMount() {
    if (!this.props.isLogined) {
      this.props.navigation.navigate('Entry')
    }

    try {
      const negotiations = await fetchNegotiations()
      this.setState({ negotiations })
      console.log('hbh',negotiations)
    } catch (e) {
      Alert.alert('Ошибка', e.message)
    }
  }

  goToCreateNegotiation = (title: string, type: string) => {
    this.props.navigation.navigate('CreateNegotiation', {title, type})
  }

  render() {
    console.log(this.state.negotiations)
    return (
      <View style={styles.container}>
        <MapView
          width={width}
          height={height}
          negotiations={this.state.negotiations}
        />
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.goToCreateNegotiation('Создать Запрос', 'request')}>
            <Text style={styles.text}>Хочу заказать</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.goToCreateNegotiation('Создать Предложение', 'offer')}>
            <Text style={styles.text}>Могу привезти</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home