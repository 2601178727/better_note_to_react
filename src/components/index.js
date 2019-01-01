import React, {Component} from 'react';
import UserName from './username';

export default class Memo extends Component{
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <UserName />
        <br/>
        留言<textarea></textarea>
      </form>
    )
  }
}