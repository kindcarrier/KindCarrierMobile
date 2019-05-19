import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  block: {
    position: 'absolute',
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 5,
    left: 0,
    right: 0,
    height: 50,
  },
  button: {
    textAlign: 'center',
    marginBottom: 5,
    width: 140,
    borderRadius: 25,
    height: 50,
    backgroundColor: '#74789b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  }
});