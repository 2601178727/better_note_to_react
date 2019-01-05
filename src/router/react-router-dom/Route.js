import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export default class Route extends Component{
  static contextTypes = {
    location: PropsTypes.object
  }
  render() {
    let {path, component: Component} = this.props; // 组件名需要大写 component: Component 为解构出新名称
    let {location:{pathname}} = this.context; // 多层解构
    if (path == pathname || location.pathname.startsWith(path)) {
      return <Component location={this.context.location}/>
    }
    return null

  }
}