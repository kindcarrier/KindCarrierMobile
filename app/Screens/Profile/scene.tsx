import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation'

import styles from './styles'

interface ProfileProps {
  navigation: NavigationScreenProp<any>,
}

class Profile extends Component<ProfileProps> {

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile screen</Text> 
      </View>
    );
  }
}

export default Profile