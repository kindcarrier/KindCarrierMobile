import HomeScene from './scene'
import { connect } from 'react-redux'
import { UserReducerState } from 'Store/User'

function mapStateToProps (state: { user: UserReducerState }) {
  return {
    user: state.user.user,
    isLogined: state.user.isLogined,
  }
}


export default connect(
  mapStateToProps,
)(HomeScene)