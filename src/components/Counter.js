import React, {Component} from 'react';

export default class Counter extends Component{
  static defaultProps = { // 默认属性对象
    count: 0
  }
  constructor (props) {
    super(props);
    this.state = {count: this.props.count};
  }
  componentWillMount () {
    console.log('1、组件将要挂载：componentWillMount')
  }
  handleClick = () => {
    this.setState(oldState => ({count: oldState.count + 1}))
  }
  render() {
    console.log('2、开始渲染组件：render')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
  componentDidMount () {
    console.log('3、组件挂载完成：componentDidMount')
  }
}