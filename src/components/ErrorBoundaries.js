import React, {Component} from 'react';

export default class ErrorBoundaries extends Component{
  constructor (props) {
    super(props);
    this.state = {hasError: false};
  }
  componentDidCatch(hasError) { // 捕获错误
    this.setState({hasError});
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>此组件暂时无法显示</div>
      )
    }
    return this.props.children
  }
}