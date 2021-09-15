## 相关网站
- [Ant Design 官网](https://ant.design/index-cn)
- [UmiJS 官网](https://umijs.org/zh-CN)
- [ANT DESIGN PRO 官网](https://pro.ant.design/zh-CN/)
- [procompoents 官网, Antd组件高级封装](https://procomponents.ant.design/)
- [预览站点,可动态拷贝配置](https://preview.pro.ant.design/dashboard/analysis/)
- 
## 学习笔记

### UIM Html模板
https://umijs.org/zh-CN/docs/html-template

### UMI路由
https://umijs.org/zh-CN/docs/routing

### 通过命令创建页面
```
npx umi g page products --typescript
```

### useRequest
https://hooks.umijs.org/zh-CN/hooks/async

- 自动请求/手动请求
- SWR(stale-while-revalidate)
- 缓存/预加载
- 屏幕聚焦重新请求
- 轮询
- 防抖
- 节流
- 并行请求
- loading delay
- 分页
- 加载更多，数据恢复 + 滚动位置恢复
-  错误重试
-  请求超时管理
-  suspense


```
import { useRequest } from '@umijs/hooks';
import Mock from 'mockjs';
import React from 'react';
function getUsername(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}
export default () => {
  const { data, error, loading } = useRequest(getUsername)
  if (error) {
    return <div>failed to load</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return <div>Username: {data}</div>
}
```

### react router
https://reactrouter.com/

###  React Hooks
> Hook 是什么？ Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。例如，useState 是允许你在 React 函数组件中添加 state 的 Hook。稍后我们将学习其他 Hook。

> 什么时候我会用 Hook？ 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其转化为 class。现在你可以在现有的函数组件中使用 Hook。

#### 使用

```
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量
  const [count, setCount] = useState(0);
}
```

### Umi Hooks
https://hooks.umijs.org/zh-CN

## dva
https://dvajs.com/

## umi-fabric
https://github.com/umijs/fabric

## 生命周期

[![hnSCyd.png](https://z3.ax1x.com/2021/08/26/hnSCyd.png)](https://imgtu.com/i/hnSCyd)


## React.memo

> 如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

```
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```

## useState更新对象

> 更新对象时,需要在初始化定义对象的数据结构

```
import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState({
    count: 0,
    count2: 0,
    name: 'aaa',
  });

  const click = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };
  const change = () => {
    setState({
      ...state,
      name: 'bbb',
    });
  };
  return (
    <div>
      <div>
        count:{state.count},name:{state.name}
      </div>
      <button onClick={click}>+1</button>
      <button onClick={change}>name</button>
    </div>
  );
};
```
