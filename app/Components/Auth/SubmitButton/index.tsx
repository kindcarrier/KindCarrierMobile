import React, {Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface SubmitButtonProps {
  onPress: () => any,
  title: string,
}

class SubmitButton extends Component<SubmitButtonProps> {
  render() {
    const { onPress, title } = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default SubmitButton