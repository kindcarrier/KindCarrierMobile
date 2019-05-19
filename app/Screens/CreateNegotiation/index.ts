import CreateNegotiationScene from './scene'
import { connect } from 'react-redux'

import { UserReducerState } from 'Store/User'

function mapStateToProps (state: any, props: any) {
  return {
    user: state.user.user,
    title: props.navigation.getParam('title'),
    type: props.navigation.getParam('type'),
    token: state.user.user.token,
    id: state.user.user.id,
  }
}


export default connect(
  mapStateToProps,
  null,
)(CreateNegotiationScene)