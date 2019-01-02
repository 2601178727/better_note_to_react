import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// HashRouter 通过路径的哈希值变量实现
// BrowserRouter 应用html5的history API实现
import {HashRouter as Router, Route} from 'react-router-dom';
/**
 * 测试驱动开发
 * Router路由容器
 * Route当前页面路由
 */

let Home = ()=><div>首页</div>
let User = ()=><div>用户管理</div>
let Profile = ()=><div>个人设置</div>

// 渲染的时候回先取(location.hash),然后与path进行匹配，显示匹配到的结果
ReactDOM.render(
  <Router>
    {/* route只能有一个根元素 */}
    <div>
      <Route path="/home" component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>,
  document.querySelector('#root')
)