import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation'

import styles from './styles'

interface ChatProps {
  navigation: NavigationScreenProp<any>,
}

class Chat extends Component<ChatProps> {

  render() {
    return (
      <View style={styles.container}>
        <Text>Chat screen</Text> 
      </View>
    );
  }
}

export default Chat