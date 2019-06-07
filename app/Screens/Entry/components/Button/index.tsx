import React, { PureComponent } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

interface ButtonProps {
  onPress: () => void,
  text: string,
}

class Button extends PureComponent<ButtonProps> {
  render() {
    const { onPress, text } = this.props
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button