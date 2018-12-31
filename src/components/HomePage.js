import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import PropTypes from 'prop-types'; // 引入类型模块


/**
 * 1、 在父组件中定义 childContextTypes 子上下文类型
 * 2、 在父组件中要定义一个getChildContext用来返回上下文对象 // 发射
 * 3、 在要接收这些上下文组件里定义contextTypes,此时子组件就接收到了context对象
 */
export default class HomePage extends Component{
  static childContextTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func
  }
  
  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor
    }
  }
  // 状态属于私有属性，只能自己改，需要对外暴露一个方法
  setColor = (color) => {
    this.setState({color})
  }
  constructor() {
    super()
    this.state = {
      color: 'red'
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}