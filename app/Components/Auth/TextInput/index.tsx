import React, {Component} from 'react'
import {TextInput as RNTextInput, View} from 'react-native'

import styles from './styles'
interface TextInputProps {
  placeholder?: string,
  onTextChange: (text: string) => void
}

class TextInput extends Component <TextInputProps> {
  render () {
    const { placeholder, onTextChange } = this.props
    return (
      <RNTextInput
        placeholder={placeholder}
        onChangeText={onTextChange}
        style={styles.input}/>
    )
  }
}

export default TextInput