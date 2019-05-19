import React, {Component} from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import styles from './style'

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
          <TouchableOpacity
            style={styles.button}
            onPress={this.goToSignUp}>
            <Text style={styles.text}>РЕГИСТРАЦИЯ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this.goToLogIn}>
            <Text style={styles.text}>ВХОД</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

export default Entry