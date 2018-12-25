import React, {Component} from 'react';
import SubCounter from './SubCounter.js';

export default class Counter extends Component{
  static defaultProps = { // 默认属性对象
    count: 0
  }
  constructor (props) {
    super(props);
    this.state = {count: this.props.count};
  }
  componentWillMount () { // 组件开始挂载时调用
    console.log('1、组件将要挂载：componentWillMount');
  }
  shouldComponentUpdate (nextProps, nextState) { // props或state改变时判断是否改变，必须返回布尔值
    console.log('4、数据发生改变时判断是否响应：shouldComponentUpdate');
    if (nextState.count < 5) {
      return true;
    } else {
      return false;
    }
  }
  componentWillUpdate () { // 数据开始更新时调用
    console.log('5、开始更新时调用：componentWillUpdate');
  }
  componentDidUpdate () { // 数据更新后调用
    console.log('6、数据更新完毕后调用：componentDidUpdate');
  }
  componentWillUnmount () { // 组件卸载时调用
    console.log('7、组件卸载时调用：componentWillUnmount')
  }
  handleClick = () => {
    this.setState(oldState => ({count: oldState.count + 1}));
  }
  destroy = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  }
  render() { // 开始渲染组件时调用
    console.log('2、开始渲染组件：render');
    return (
      <div>
        父计数器：{this.state.count}
        <button onClick={this.handleClick}>+</button>
        <SubCounter count={this.state.count}/>
        <button onClick={this.destroy}>移除DOM</button>
      </div>
    )
  }
  componentDidMount () { // 组件挂载完成后调用
    console.log('3、组件挂载完成：componentDidMount');
  }
}