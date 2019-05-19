import React, {Component} from 'react'
import { View, Alert, ImageBackground } from 'react-native'
import styles from './styles'
import Container from 'Components/Auth/Container'
import TextInput from 'Components/Auth/TextInput'
import SubmitButton from 'Components/Auth/SubmitButton'
import validateEmail from 'Utils/validateEmail'
import logIn from 'Api/logIn'
import { NavigationScreenProp } from 'react-navigation'
import UserData from 'Types/user'
import Loader from 'Components/Loader'
import Title from 'Components/Auth/Title'

const background = require('assets/img/background.png')
interface LogInProps {
  navigation: NavigationScreenProp<any>,
  setUserAfterLogIn: (user: UserData) => any
}

interface LogInState {
  email: string,
  password: string,
  inProgress: boolean,
}

class LogIn extends Component<LogInProps, LogInState> {
  constructor(props: LogInProps) {
    super(props)

    this.state = {
      email: '',
      password: '',
      inProgress: false,
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
      this.setState({ inProgress: true })
      const user = await logIn({ email, password })
      this.props.setUserAfterLogIn(user)
      this.props.navigation.navigate('Home')
    } catch (e) {
      Alert.alert('Ошибка', e.message)
    } finally {
      this.setState({ inProgress: false })
    }
  }

  render() {
    const { inProgress } = this.state
    return (
      <ImageBackground
        source={background}
        style={styles.bgImage}>
        <View style={styles.container}>
          <Container>
            <View style={styles.titleContainer}>
              <Title title='ВХОД' />
            </View>
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
                disabled={!this.isValid() || inProgress}
                onPress={this.submit} />
              {inProgress && <Loader />}
            </View>
          </Container>
        </View>
      </ImageBackground>
    )
  }
}

export default LogIn