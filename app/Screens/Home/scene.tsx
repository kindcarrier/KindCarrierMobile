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
import MapView from 'Components/Map'
import fetchNegotiations from 'Api/fetchNegotiations'
import Negotiation from 'Types/negotiation'
import Button from './components/Button'
import InfoModal from './components/InfoModal'

import UserData from 'Types/user'
import styles from './styles'

interface HomeProps {
  user: UserData | null,
  isLogined: boolean,
  navigation: NavigationScreenProp<any>,
}

interface HomeState {
  negotiations: Array<Negotiation>
  infoVisible: boolean,
  negotiation: Negotiation | null
}

const { width, height } = Dimensions.get('screen')

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      negotiations: [],
      infoVisible: false,
      negotiation: null,
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

  onMarkerPress = (negotiation: Negotiation) => {
    this.setState({ negotiation, infoVisible: true })
  }

  onCloseInfo = () => {
    this.setState({ infoVisible: false })
  }

  render() {
    const { negotiation } = this.state
    return (
      <View style={styles.container}>
        <MapView
          width={width}
          height={height}
          negotiations={this.state.negotiations}
          onPress={this.onMarkerPress}
        />
        <View style={styles.block}>
          <Button
            onPress={() => this.goToCreateNegotiation('Создать Запрос', 'request')}
            title='Хочу заказать'
          />
          <Button
            onPress={() => this.goToCreateNegotiation('Создать Предложение', 'offer')}
            title='Могу привезти'
          />
        </View>
        {this.state.infoVisible && <InfoModal
          negotiation={negotiation}
          onPress={this.onCloseInfo}
        />}
      </View>
    );
  }
}

export default Home