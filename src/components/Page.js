import React, { Component } from 'react';

export default class Page extends Component{
  render () {
    let i = 0;
    while (++i < 1000000000){ }
    return (
      <div>
        hello
      </div>
    )
  }
}