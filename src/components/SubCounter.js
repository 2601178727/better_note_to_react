import React, {Component} from 'react';

export default class SubCounter extends Component{
  constructor (props) {
    super(props);
  }
  componentWillReceiveProps () { // props发生改变时调用
    console.log('subCounter、接收到父组件传值');
  }
  render () {
    return (
      <div>
        子计数器：{this.props.count}
      </div>
    )
  }
}