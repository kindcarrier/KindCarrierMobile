import React, {Component} from 'react'
import { Text } from 'react-native'

import styles from './styles'
interface TextInputProps {
  title: string,
}

class TextInput extends Component <TextInputProps> {
  render () {
    const { title } = this.props
    return (
      <Text style={styles.title}>{title}</Text>
    )
  }
}

export default TextInput