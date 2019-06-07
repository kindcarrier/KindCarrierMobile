import React, {Component} from 'react'
import { View, ImageBackground } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import styles from './style'
import Button from './components/Button'

interface EntryProps {
  navigation: NavigationScreenProp<any>,
}

const background = require('assets/img/background.png')

class Entry extends Component<EntryProps> {
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  goToLogIn = () => {
    this.props.navigation.navigate('LogIn')
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.bgImage}>
        <View style={styles.container}>
          <Button
            onPress={this.goToSignUp}
            text='РЕГИСТРАЦИЯ' />

          <Button
            onPress={this.goToLogIn}
            text='ВХОД' />
        </View>
      </ImageBackground>
    )
  }
}

export default Entry