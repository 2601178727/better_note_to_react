import React, {Component} from 'react';

export default class List extends Component{
  render() {
    return (
      <React.Fragment>
      {/* <> */}
        {this.props.messages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      {/* </> */}
      </React.Fragment>
    )
  }
}