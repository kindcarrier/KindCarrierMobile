import React, {Component} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import styles from './style'

interface EntryProps {
  navigation: NavigationScreenProp<any>,
}

class Entry extends Component<EntryProps> {
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  goToLogIn = () => {
    this.props.navigation.navigate('LogIn')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToSignUp}>
          <Text>Регистрация</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.goToLogIn}>
          <Text>Вход</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Entry