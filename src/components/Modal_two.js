import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component{
  constructor() {
    super();
    this.container = document.querySelector('#root');
  }
  render() {
    // 分别接收子元素、插入位置
    return (
      <div>
        <span>这里是标题</span>
        {/* {ReactDOM.createPortal(this.props.children, this.container)} */}
        {this.props.children}
        <span>插入结束了</span>
      </div>
    );
  }
}