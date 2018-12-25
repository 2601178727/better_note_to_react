import React from 'react';
import ReactDom from 'react-dom';
import Person from './components/Person.js';

let data = {
  name: 'name',
  age: 11,
  gender: '男',
  hobby: ['篮球', '足球'],
  position: {x: 10, y: 11}
}
ReactDom.render(<Person {...data} />, document.querySelector('#root'));