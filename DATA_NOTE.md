#### Performance

###### 借助Chrome下 Performance板块

> 需要在URL上拼接 /?react_perf
> 精确定位性能消耗部位

###### 重写shouldComponentUpdate方法，减少无必要的刷新
> 相当于PureComponent => PureComponent属于浅比较，即只比较地址，不能比较深层数据
> 每次需要结构赋值新数组，否则结果为未改变
> PureComponent设置为浅比较的原因是如果每次都深比较，消耗内存
> 样例 Todos.js

###### 引入immutable/seamless-immutable
> seamless-immutable 是 immutable 的简化版
> immutable 文件20K，功能强大
> seamless-immutable 文件只有2k 功能相对简单
> 采用结构共享的方式
> 一个节点改变，只会改变它和他的父节点
> 方便回溯 => 用一个新数组接收
> 样例 Imu.js



