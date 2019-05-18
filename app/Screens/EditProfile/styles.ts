import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginTop: 10, 
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});