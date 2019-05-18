import React, {Component} from 'react'
import {TextInput as RNTextInput, View} from 'react-native'

import styles from './styles'
interface TextInputProps {
  placeholder?: string,
  onTextChange: (text: string) => void
  autoCapitalize?: boolean
  keyboardType?: 'default' | 'email-address'
  secureTextEntry?: boolean,
  value?: string,
}

class TextInput extends Component <TextInputProps> {
  render () {
    const { placeholder, onTextChange, autoCapitalize, keyboardType, secureTextEntry, value } = this.props
    return (
      <RNTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onTextChange}
        autoCorrect={false}
        autoCapitalize={!!autoCapitalize ? 'words' : 'none'}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}/>
    )
  }
}

export default TextInput