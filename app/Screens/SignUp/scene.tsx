import React, {Component} from 'react'
import { View, Alert } from 'react-native'
import styles from './styles'
import Container from 'Components/Auth/Container'
import TextInput from 'Components/Auth/TextInput'
import SubmitButton from 'Components/Auth/SubmitButton'
import validateEmail from 'Utils/validateEmail'
import signUp from 'Api/signUp'
import { NavigationScreenProp } from 'react-navigation'
import UserData from 'Types/user'
import Loader from 'Components/Loader'

interface SignUpProps {
  navigation: NavigationScreenProp<any>,
  setUserAfterSignUp: (user: UserData) => any
}

interface SignUpState {
  name: string,
  email: string,
  password: string,
  inProgress: boolean,
}

class SignUp extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      inProgress: false,
    }
  }

  onNameChange = (name: string) => {
    this.setState({ name })
  }

  onEmailChange = (email: string) => {
    this.setState({ email })
  }

  onPassworsChange = (password: string) => {
    this.setState({ password })
  }

  isValid = (): boolean => {
    const { name, password, email } = this.state
    return validateEmail(email) && !!name && !!password
  }

  submit = async () => {
    const { name, email, password } = this.state
    try {
      this.setState({ inProgress: true })
      const [firstName, ...tail] = name.split(' ')
      const lastName = tail.join(' ') 
      const user = await signUp({ firstName, lastName, email, password })
      this.props.setUserAfterSignUp(user)
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
      <View style={styles.container}>
        <Container>
          <TextInput
            placeholder='name'
            autoCapitalize
            onTextChange={this.onNameChange}
          />
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
              title='Регистрация'
              disabled={!this.isValid() || inProgress}
              onPress={this.submit} />
          </View>
        </Container>
        {inProgress && <Loader />}
      </View>
    )
  }
}

export default SignUp