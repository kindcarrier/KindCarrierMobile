import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: 100,
  },
  map: {
    width,
    height,
  }
})