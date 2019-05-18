import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import UserData from 'Types/user'
import FastImage from 'react-native-fast-image'
import getImageUrl from 'Utils/getImageUrl'

import styles from './styles'

interface ProfileProps {
  navigation: NavigationScreenProp<any>,
  user: UserData | null,
}



class Profile extends Component<ProfileProps> {

  goToEditScreen = () => {
    this.props.navigation.navigate('EditProfile')
  }

  render() {
    const { user } = this.props
    const url = user && user.avatar.url
      ? getImageUrl(user.avatar.url)
      : null
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={this.goToEditScreen}>
          <FastImage
            style={styles.avatar}
            source={ !!url
              ? {
                  uri: url,
                  priority: FastImage.priority.normal,
                }
              : require('./user.png')
            }
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{`${user ? user.first_name : ''} ${user ? user.last_name : ''}`}</Text> 
        <Text>Email: {`${user ? user.email : ''}`}</Text>
      </View>
    );
  }
}

export default Profile