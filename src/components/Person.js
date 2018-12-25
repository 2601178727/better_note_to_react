import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Person extends Component{
  // 类型校验
  static propTypes = {
    name: PropTypes.string.isRequired, // string类型，必填
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['男', '女', '其他']), // 其中一项
    hobby: PropTypes.array, // 数组
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    age: function (props, propName, componentName) {
      if (props[propName]<0 || props[propName]>120) {
        throw new Error('between 0 to 120');
      }
    }
  }
  constructor (props) {
    super(props);
  }
  render() {
    let { name, age, gender, hobby, position } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>性别</td>
            <td>爱好</td>
            <td>所在位置</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{hobby.toString()}</td>
            <td>{position.toString()}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}