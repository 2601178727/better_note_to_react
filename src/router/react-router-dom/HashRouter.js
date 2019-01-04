import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export default class HashRouter extends Component{
  static childContextTypes = {
    location: PropsTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  getChildContext() {
    return {
      location: { pathname: window.location.hash.slice(1) || '/' }
    }
  }
  componentDidMount() {
    window.location.hash = window.location.hash || '/';
    let render = () => {
      this.setState();
    }
    window.addEventListener('hashchange', render);
  }
  render() {
    return this.props.children ? React.Children.only(this.props.children) : null;
  }
}