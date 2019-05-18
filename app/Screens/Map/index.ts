import MapScene from './scene'
import { connect } from 'react-redux'
import { UserReducerState } from 'Store/User'

function mapStateToProps (state: { user: UserReducerState }) {
  return {
    user: state.user.user,
  }
}


export default connect(
  mapStateToProps,
)(MapScene)