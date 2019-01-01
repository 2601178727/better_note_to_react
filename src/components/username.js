import React, {Component} from 'react';
import One from './One';
import Second from './Second';

class UserName extends Component{
  render() {
    return (
      <label>
        用户名：
        <input value={this.props.data} onChange={this.props.save}/>
      </label>
    )
  }
}

/**
 * 实现加载数据的时候，先从localStorage 里取到一个key，然后再从接口里取出这个key的值进行显示
 * 封装从里向外封装，执行从外向里执行
 */
UserName = One(UserName);
UserName = Second(UserName, 'username', '用户名');

export default UserName;