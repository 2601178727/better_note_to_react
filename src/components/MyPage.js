import React, {Component} from 'react';
import ErrorBoundaries from './ErrorBoundaries';

export default class MyPage extends Component{
  render() {
    return (
      <ErrorBoundaries>
        <div>{new Date()}</div>
      </ErrorBoundaries>
    )
  }
}