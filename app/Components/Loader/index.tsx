import React, {Component} from 'react'
import { ActivityIndicator } from 'react-native'

interface LoaderProps {
  color?: string,
  size?: 'large' | 'small'
}

class Loader extends Component<LoaderProps> {
  static defaultProps = {
    size: 'large'
  }

  render() {
    const { color, size } = this.props
    return (
      <ActivityIndicator color={color} size={size} />
    )
  }
}

export default Loader