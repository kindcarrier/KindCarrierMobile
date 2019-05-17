
import { connect } from 'react-redux'

import SignupScene from './scene'
import { setUserAfterSignUp } from 'Store/User/actions'

const actions = {
  setUserAfterSignUp,
}

export default connect(
  null,
  actions,
)(SignupScene)
