import React, {Component} from 'react'
import { View } from 'react-native'

import styles from './styles'

interface ContainerProps {
  children: any,
}

class Container extends Component <ContainerProps> {
  render () {
    return (
      <View style={styles.conteiner}>{this.props.children}</View>
    )
  }
}

export default Container