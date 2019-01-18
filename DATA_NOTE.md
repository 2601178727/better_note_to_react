#### context
- 1、 在父组件中定义 childContextTypes 子上下文类型
- 2、 在父组件中要定义一个getChildContext用来返回上下文对象 // 发射
- 3、 在要接收这些上下文组件里定义contextTypes,此时子组件就接收到了context对象,通过this.context访问传递的属性

###### 依赖PropTypes
> import PropTypes from 'prop-types'; // 引入类型模块