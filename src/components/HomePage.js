import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';

export default class HomePage extends Component{
  constructor() {
    super()
    this.state = {
      color: '#fff'
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