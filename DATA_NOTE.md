#### Performance

###### 借助Chrome下 Performance板块

> 需要在URL上拼接 /?react_perf
> 精确定位性能消耗部位

###### 重写shouldComponentUpdate方法，减少无必要的刷新
> 相当于PureComponent => PureComponent属于浅比较
> 每次需要结构赋值新数组，否则结果为未改变


