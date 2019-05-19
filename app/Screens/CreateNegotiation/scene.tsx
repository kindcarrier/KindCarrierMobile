import React, {Component} from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { NavigationScreenProp } from 'react-navigation'
import Address from 'Types/address'
import TextInput from 'Components/Auth/TextInput'
import Title from 'Components/Auth/Title'
import Button from 'Components/Button'
import MapModal from './components/MapModal'
import createNegotiation from 'Api/createNegotiation'

import styles from './styles'

interface CreateNegotiationProps {
  navigation: NavigationScreenProp<any>,
  title: string,
  type: string,
  token: string,
  id: number,
}

interface CreateNegotiationState {
  name: string,
  description: string,
  serviceCost: number,
  addressFrom: Address,
  addressTo: Address,
  showMapModalFrom: boolean,
  showMapModalTo: boolean,
}

class CreateNegotiation extends Component<CreateNegotiationProps, CreateNegotiationState> {
  constructor(props: CreateNegotiationProps) {
    super(props)

    this.state = {
      name: '',
      description: '',
      serviceCost: 0,
      // addressFrom: Address,
      // addressTo: Address,
      showMapModalFrom: false,
      showMapModalTo: false,
    }
  }

  onNameChange = (name: string) => {
    this.setState({ name })
  }

  onDescriptionChange = (description: string) => {
    this.setState({ description })
  }

  onServiceCostChange = (value: string) => {
    const serviceCost = parseFloat(value)
    this.setState({ serviceCost })
  }

  onCountryFromChange = (country: string) => {
    this.setState({ addressFrom: { ...this.state.addressFrom, country } })
  }

  onStateFromChange = (state: string) => {
    this.setState({ addressFrom: { ...this.state.addressFrom, state } })
  }

  onCityFromChange = (city: string) => {
    this.setState({ addressFrom: { ...this.state.addressFrom, city } })
  }

  onStreetFromChange = (street: string) => {
    this.setState({ addressFrom: { ...this.state.addressFrom, street } })
  }

  onCoordinateFromPress = () => {
    this.setState({ showMapModalFrom: true })
  }

  onCountryToChange = (country: string) => {
    this.setState({ addressFrom: { ...this.state.addressTo, country } })
  }

  onStateToChange = (state: string) => {
    this.setState({ addressFrom: { ...this.state.addressTo, state } })
  }

  onCityToChange = (city: string) => {
    this.setState({ addressTo: { ...this.state.addressTo, city } })
  }

  onStreetToChange = (street: string) => {
    this.setState({ addressTo: { ...this.state.addressTo, street } })
  }

  onCoordinateToPress = () => {
    this.setState({ showMapModalTo: true })
  }

  onMapPress = (value: any) => {
    const { latitude, longitude } = value.nativeEvent.coordinate
    if (this.state.showMapModalFrom) {
      this.setState({
        showMapModalFrom: false,
        addressFrom: { ...this.state.addressFrom, latitude, longitude }
      })
    }

    if (this.state.showMapModalTo) {
      this.setState({
        showMapModalTo: false,
        addressFrom: { ...this.state.addressTo, latitude, longitude }
      })
    }
  }

  isValid() {

  }

  submit = async () => {
    const { name, description, serviceCost, addressFrom, addressTo } = this.state
    const { id, token, type } = this.props
    try {
      const negotiation = await createNegotiation({
        userId: id,
        type,
        token,
        name,
        description,
        serviceCost,
        addressFrom,
        addressTo,
      })
      console.log(negotiation)
      this.props.navigation.goBack()
    } catch (e) {
      Alert.alert('Ошибка', e.message)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Title title={this.props.title} /> 
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <TextInput
            placeholder='Название'
            autoCapitalize
            onTextChange={this.onNameChange} />
          <TextInput
            placeholder='Описание'
            autoCapitalize
            multiline
            onTextChange={this.onDescriptionChange} />
          <TextInput
            placeholder='Стоимость'
            keyboardType='numeric'
            onTextChange={this.onServiceCostChange} />
          
          <Text>Адрес отправления</Text>
          <TextInput
            placeholder='Страна'
            autoCapitalize
            onTextChange={this.onCountryFromChange} />
          <TextInput
            placeholder='Область/штат'
            autoCapitalize
            onTextChange={this.onStateFromChange} />
          <TextInput
            placeholder='Город'
            autoCapitalize
            onTextChange={this.onCityFromChange} />
          <TextInput
            placeholder='Улица'
            autoCapitalize
            onTextChange={this.onStreetFromChange} />
          <Button
            title='Указать координаты'
            onPress={this.onCoordinateFromPress} />

          <Text>Адрес доставки</Text>
          <TextInput
            placeholder='Страна'
            autoCapitalize
            onTextChange={this.onCountryToChange} />
          <TextInput
            placeholder='Область/штат'
            autoCapitalize
            onTextChange={this.onStateToChange} />
          <TextInput
            placeholder='Город'
            autoCapitalize
            onTextChange={this.onCityToChange} />
          <TextInput
            placeholder='Улица'
            autoCapitalize
            onTextChange={this.onStreetToChange} />
          <Button
            title='Указать координаты'
            onPress={this.onCoordinateToPress} />

          <Button
            title='Создать'
            onPress={this.submit}
            style={styles.submit} />
        </ScrollView>
        {(this.state.showMapModalFrom || this.state.showMapModalTo) &&
          <MapModal onPress={this.onMapPress} />}
      </View>
    );
  }
}

export default CreateNegotiation