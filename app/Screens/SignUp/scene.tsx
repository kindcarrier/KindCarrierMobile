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

interface SignUpProps {
  navigation: NavigationScreenProp<any>,
  setUserAfterSignUp: (user: UserData) => any
}

interface SignUpState {
  name: string,
  email: string,
  password: string,
}

class SignUp extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
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
      const [firstName, ...tail] = name.split(' ')
      const lastName = tail.join(' ') 
      const user = await signUp({ firstName, lastName, email, password })
      this.props.setUserAfterSignUp(user)
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
            placeholder='name'
            onTextChange={this.onNameChange}
          />
          <TextInput
            placeholder='email'
            onTextChange={this.onEmailChange}
          />
          <TextInput
           placeholder='password'
           onTextChange={this.onPassworsChange}
          />
          <View style={styles.submit}>
            <SubmitButton
              title='Регистрация'
              disabled={!this.isValid()}
              onPress={this.submit} />
          </View>
        </Container>
      </View>
    )
  }
}

export default SignUp