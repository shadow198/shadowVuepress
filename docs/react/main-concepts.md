# react

## what

> 用于构建用户界面的 JavaScript 库

1. React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。
2. 构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。
3. 无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。

## how

### install

```
npx install create-react-app
```

### 渲染 DOM 树

```
ReactDOM.render(componentToRender, targetNode)
```

### JSX 语法规则

```
  1. 定义虚拟DOM时,不要写引号
   2. 标签中混入JS表达式要用{}
   3. 样式的类名指定不要用class, 要用className
   4. 内联样式,要用style:{{key:value}}
   5. 只有一个根标签
   6. 标签必须要闭合
   7. 标签首字母
      1. 若小写字母开头,标签转为html同名元素
      2. 若大写字母开头,渲染自定义组件
```

### 创建一个无状态的函数组件

```
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

### 使用 class 语法创建组件

```
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

### 用组合的方式创建一个 React 组件

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

```

### prop 传参

```
1. const element = <Welcome name="Sara" />;
2. return <h1>Hello, {props.name}</h1>;
```

### 使用 React 渲染嵌套组件

### 事件处理

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

### 向事件处理程序传递参数

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

### 条件渲染

```
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

### 列表渲染

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

### 表单

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

### 状态提升

> 通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。让我们看看它是如何运作的。

```

```

### hooks

```
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
