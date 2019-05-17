import React, {Component} from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Container from 'Components/Auth/Container'
import TextInput from 'Components/Auth/TextInput'
import SubmitButton from 'Components/Auth/SubmitButton'

interface SignUpProps {

}

class SignUp extends Component<SignUpProps> {
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <TextInput
            placeholder='name'
            onTextChange={() => {}}
          />
          <TextInput
            placeholder='email'
            onTextChange={() => {}}
          />
          <TextInput
           placeholder='password'
           onTextChange={() => {}}
          />
          <View style={styles.submit}>
            <SubmitButton
              title='Регистрация'
              onPress={() => {}} />
          </View>
        </Container>
      </View>
    )
  }
}

export default SignUp