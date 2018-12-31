import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component{
  static contextTypes = {
    color: PropTypes.string
  }
  render () {
    return (
      <div>
        <h1 style={{color: this.context.color }}>我是内容</h1>
      </div>
    )
  }
}