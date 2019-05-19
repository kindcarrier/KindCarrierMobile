import React, {Component} from 'react'
import { View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import styles from './styles'
import Negotiation from 'Types/negotiation'

interface MapProps {
  height: number,
  width: number,
  negotiations: Array<Negotiation>
}

class Map extends Component<MapProps> {
  render() {
    const { width, height, negotiations } = this.props
    console.log(negotiations)
    return (
      <View style={styles.container}>
        <MapView
          style={[styles.map, {width, height}]}
        >
          {negotiations.map(n => <Marker coordinate={{
            latitude: n.address_from.latitude || 0,
            longitude: n.address_from.longitude || 0,
          }}
          pinColor='green' />)}
          {negotiations.map(n => <Marker coordinate={{
            latitude: n.address_to.latitude || 0,
            longitude: n.address_to.longitude || 0,
          }}
          pinColor='red' />)}
        </MapView>
      </View>
    )
  }
}
export default Map