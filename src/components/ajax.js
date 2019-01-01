/**
 * 实现加载数据的时候，先从localStorage 里取到一个key，然后再从接口里取出这个key的值进行显示
 * localStorage => xx => ajax => i am
 */

import React,{Component} from 'react';

export default function(OldComponent) {
  class NewComponent extends Component{
    constructor () {
      super();
      this.state = {data: ''};
    }
   componentDidMount () {
     fetch('/user.json').then(response => response.json()).then(user => {
      this.setState({data: user[name] || placeholder});
     });
   }
   save = (event) =>{
     this.setState({data: event.target.value});
     localStorage.setItem(name, event.target.value);
   }
   render () {
     return <OldComponent data={this.state.data} save={this.save}/>
   }
  }
  return NewComponent;
}
