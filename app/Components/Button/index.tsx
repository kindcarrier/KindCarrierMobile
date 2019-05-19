import React, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface SubmitButtonProps {
  onPress: () => any,
  title: string,
  disabled?: boolean,
  style?: any,
}

class Button extends Component<SubmitButtonProps> {
  render() {
    const { onPress, title, disabled, style } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, style]}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button