import React, {Component} from 'react';
class Counter extends Component{
  render () {
    return (
      <div>Counter</div>
    )
  }
}
export default class Main extends Component{
  constructor () {
    super();
    this.state = {show: true};
  }
  render () {
    return (
      <div>
        <button onClick={() => this.setState({show: !this.state.show})}>upDate</button>
        {
          this.state.show ? 
          <div><Counter /></div> :
          <span><Counter /></span>
        }
      </div>
    )
  }
}