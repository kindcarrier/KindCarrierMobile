import React, {Component} from 'react'
import { Text, View, Alert } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import UserData from 'Types/user'
import FastImage from 'react-native-fast-image'
import getImageUrl from 'Utils/getImageUrl'
import Container from 'Components/Auth/Container'
import TextInput from 'Components/Auth/TextInput'
import SubmitButton from 'Components/Auth/SubmitButton'
import updateUser from 'Api/updateUser'

import styles from './styles'

interface EditProfileProps {
  navigation: NavigationScreenProp<any>,
  user: UserData | null,
  setUserAfterUpdate: (user: UserData) => any
}

interface EditProfileState {
  firstName: string,
  lastName: string,
}

class EditProfile extends Component<EditProfileProps, EditProfileState> {
  constructor(props: EditProfileProps) {
    super(props)

    this.state = {
      firstName: props.user && props.user.first_name || '',
      lastName: props.user && props.user.last_name || ''
    }
  }

  onFirstNameChange = (firstName: string) => {
    this.setState({ firstName })
  }

  onLastNameChange = (lastName: string) => {
    this.setState({ lastName })
  }

  submit = async () => {
    try {
      if (!this.props.user) return
      const { token, id } = this.props.user
      const { firstName, lastName } = this.state
      const user = await updateUser({ id, token, firstName, lastName })
      this.props.setUserAfterUpdate(user)
      this.props.navigation.pop()
    } catch (e) {
      Alert.alert(e.message)
    }
  }

  render() {
    const { user } = this.props
    const url = user && user.avatar.url
      ? getImageUrl(user.avatar.url)
      : null
    console.log(url)
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          
        </View>
        <Container>
          <TextInput
            placeholder='Имя'
            autoCapitalize
            value={this.state.firstName}
            onTextChange={this.onFirstNameChange}
          />
          <TextInput
           placeholder='Фамилия'
           autoCapitalize
           value={this.state.lastName}
           onTextChange={this.onLastNameChange}
          />
          <View style={styles.submit}>
            <SubmitButton
              title='Обновить'
              onPress={this.submit} />
          </View>
        </Container>
        
      </View>
    );
  }
}

export default EditProfile