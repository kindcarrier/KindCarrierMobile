import React, {Component} from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'

interface MapProps {
  onPress: (values: any) => any
}

class Map extends Component<MapProps> {
  render() {
    const { onPress } = this.props
    return (
      <View style={styles.container}>
        <MapView
          style={[styles.map]}
          showsMyLocationButton
          onPress={onPress}
        />
      </View>
    )
  }
}
export default Map