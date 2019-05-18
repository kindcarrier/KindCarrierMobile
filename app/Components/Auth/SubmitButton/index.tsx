import React, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface SubmitButtonProps {
  onPress: () => any,
  title: string,
  disabled?: boolean,
}

class SubmitButton extends Component<SubmitButtonProps> {
  render() {
    const { onPress, title, disabled } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default SubmitButton