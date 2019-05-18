import EditProfileScene from './scene'
import { connect } from 'react-redux'

import { UserReducerState } from 'Store/User'

import { setUserAfterUpdate } from 'Store/User/actions'

function mapStateToProps (state: { user: UserReducerState }) {
  return {
    user: state.user.user,
  }
}

const actions = {
  setUserAfterUpdate,
}

export default connect(
  mapStateToProps,
  actions,
)(EditProfileScene)