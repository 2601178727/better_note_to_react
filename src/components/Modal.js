import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component{
  constructor() {
    super();
    this.container = document.querySelector('#model-root');
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}