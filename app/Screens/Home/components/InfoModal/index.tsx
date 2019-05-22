import React, {Component} from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Negotiation from 'Types/negotiation'

import styles from './styles'

interface InfoModalProps {
  onPress: () => void,
  negotiation: Negotiation | null,
}

class InfoModal extends Component<InfoModalProps> {
  render() {
    const { onPress, negotiation } = this.props
    return (
      <View style={styles.infoContainer}>
          {negotiation && <View style={styles.infoBlock}>
            <Text>Название: {negotiation.name}</Text>
            <Text>Описание: {negotiation.description}</Text>
            <Text>Стоимость: {negotiation.service_cost}</Text>
          </View>}
          <TouchableOpacity
            style={[styles.button, styles.buttonOk]}
            onPress={onPress}
          >
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

export default InfoModal