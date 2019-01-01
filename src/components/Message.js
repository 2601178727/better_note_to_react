import React, {Component} from 'react';
import List from './fragment';

export default class Counter extends Component{
  constructor (props) {
    super(props);
    this.state = {messages: [1, 2, 3]};
  }
  render() {
    return (
      <ul>
        <List messages={this.state.messages}/>
      </ul>
    )
  }
}