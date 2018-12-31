import React, { Component } from 'react';
import {List} from 'immutable';
import { is } from 'immutable';

class PureComponent extends Component{
  shouldComponentUpdate(nextProps, nextState) {
    // is判断两个 immutable对象是否相等
    return (is(nextProps, this.prop) && is(nextState, this.state));
    // 循环新属性和新状态，判断新旧值是否相同
    // 属于浅比较 即只能比较地址 不能比较数组中的值变化
    // 如果把这里改为深比较，消耗内存
    /* for(let prop in nextProps) {
      if (nextProps[prop] !== this.props[prop]) {
        return true;
      }
    }
    for(let prop in nextState) {
      if (nextProps[prop] !== this.props[prop]) {
        return true;
      }
    }
    return false; */
  }
}
export default class Imu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  handleClick=() => {
    let todo = this.todo.value;
    let todos = List(this.state.todos);
    todos = todos.push(todo)
    // this.setState({todos: this.state.todos}) // 浅比较中状态没有改变
    this.setState({todos: todos}) // 浅比较中状态发生改变，因为结构出了新数组
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.todos === this.state.todos) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <div>
        <input ref={input => this.todo = input}/><button onClick={this.handleClick}>+</button>
        <ul>
          {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    )
  }
}