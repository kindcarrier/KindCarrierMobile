import React, {Component} from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'

interface MapProps {
  height: number,
  width: number,
}

class Map extends Component<MapProps> {
  render() {
    const { width, height } = this.props
    return (
      <View style={styles.container}>
        <MapView
          style={[styles.map, {width, height}]}
        />
      </View>
    )
  }
}
export default Map