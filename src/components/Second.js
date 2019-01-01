import React,{Component} from 'react';

 export default function(OldComponent, name, placeholder) {
   class NewComponent extends Component{
     constructor () {
       super();
       this.state = {data: ''};
     }
    componentDidMount () {
      this.setState({data: localStorage.getItem(name) || placeholder});
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

