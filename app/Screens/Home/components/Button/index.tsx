import React, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface ButtonProps {
  onPress: () => void,
  title: string,
}

class Button extends Component<ButtonProps> {
  render() {
    const { onPress, title } = this.props
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button