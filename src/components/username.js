import React, {Component} from 'react';
import Ajax from './ajax';

class UserName extends Component{
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props.data);
  }
  render() {
    return (
      <label>
        用户名：
        <input value={this.props.data} onChange={this.props.save}/>
      </label>
    )
  }
}

export default Ajax(UserName, 'username');