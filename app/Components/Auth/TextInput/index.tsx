import React, {Component} from 'react'
import {TextInput as RNTextInput, View} from 'react-native'

import styles from './styles'
interface TextInputProps {
  placeholder?: string,
  onTextChange: (text: string) => void
  autoCapitalize?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric'
  secureTextEntry?: boolean,
  value?: string,
  multiline?: boolean,
}

class TextInput extends Component <TextInputProps> {
  render () {
    const { placeholder, onTextChange, autoCapitalize, keyboardType, secureTextEntry, value,
    multiline } = this.props
    return (
      <RNTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onTextChange}
        autoCorrect={false}
        autoCapitalize={!!autoCapitalize ? 'words' : 'none'}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={[styles.input, multiline && styles.multiline]}/>
    )
  }
}

export default TextInput