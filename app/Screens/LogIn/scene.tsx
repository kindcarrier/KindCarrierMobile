import React, {Component} from 'react'
import { View, Alert } from 'react-native'
import styles from './styles'
import Container from 'Components/Auth/Container'
import TextInput from 'Components/Auth/TextInput'
import SubmitButton from 'Components/Auth/SubmitButton'
import validateEmail from 'Utils/validateEmail'
import logIn from 'Api/logIn'
import { NavigationScreenProp } from 'react-navigation'
import UserData from 'Types/user'

interface LogInProps {
  navigation: NavigationScreenProp<any>,
  setUserAfterLogIn: (user: UserData) => any
}

interface LogInState {
  email: string,
  password: string,
}

class LogIn extends Component<LogInProps, LogInState> {
  constructor(props: LogInProps) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  onEmailChange = (email: string) => {
    this.setState({ email })
  }

  onPassworsChange = (password: string) => {
    this.setState({ password })
  }

  isValid = (): boolean => {
    const { password, email } = this.state
    return validateEmail(email) && !!password
  }

  submit = async () => {
    const { email, password } = this.state
    try {

      const user = await logIn({ email, password })
      this.props.setUserAfterLogIn(user)
      this.props.navigation.navigate('Home')
    } catch (e) {
      Alert.alert('Ошибка', e.message)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <TextInput
            placeholder='email'
            keyboardType='email-address'
            onTextChange={this.onEmailChange}
          />
          <TextInput
           placeholder='password'
           secureTextEntry
           onTextChange={this.onPassworsChange}
          />
          <View style={styles.submit}>
            <SubmitButton
              title='Войти'
              disabled={!this.isValid()}
              onPress={this.submit} />
          </View>
        </Container>
      </View>
    )
  }
}

export default LogIn