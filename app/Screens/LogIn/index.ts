
import { connect } from 'react-redux'

import LoginScene from './scene'
import { setUserAfterLogIn } from 'Store/User/actions'

const actions = {
  setUserAfterLogIn,
}

export default connect(
  null,
  actions,
)(LoginScene)
