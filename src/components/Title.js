import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component{
  static contextTypes = {
    color: PropTypes.string, // 接收谁，谁就传进来
    setColor: PropTypes.func
  }
  render () {
    return (
      <div>
        <h1 style={{color: this.context.color }}>我是标题</h1>
        <button onClick={() => this.context.setColor('#fff') }>变白</button>
        <button onClick={() => this.context.setColor('red')}>变红</button>
        <button onClick={() => this.context.setColor('green')}>变绿</button>
      </div>
    )
  }
}