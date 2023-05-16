import{o as e,g as t,G as n}from"./framework.e6884fad.js";const g='{"title":"react","description":"","frontmatter":{},"headers":[{"level":2,"title":"what","slug":"what"},{"level":2,"title":"how","slug":"how"},{"level":3,"title":"install","slug":"install"},{"level":3,"title":"\u6E32\u67D3 DOM \u6811","slug":"\u6E32\u67D3-dom-\u6811"},{"level":3,"title":"JSX \u8BED\u6CD5\u89C4\u5219","slug":"jsx-\u8BED\u6CD5\u89C4\u5219"},{"level":3,"title":"\u521B\u5EFA\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u51FD\u6570\u7EC4\u4EF6","slug":"\u521B\u5EFA\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u51FD\u6570\u7EC4\u4EF6"},{"level":3,"title":"\u4F7F\u7528 class \u8BED\u6CD5\u521B\u5EFA\u7EC4\u4EF6","slug":"\u4F7F\u7528-class-\u8BED\u6CD5\u521B\u5EFA\u7EC4\u4EF6"},{"level":3,"title":"\u7528\u7EC4\u5408\u7684\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A React \u7EC4\u4EF6","slug":"\u7528\u7EC4\u5408\u7684\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A-react-\u7EC4\u4EF6"},{"level":3,"title":"prop \u4F20\u53C2","slug":"prop-\u4F20\u53C2"},{"level":3,"title":"\u4F7F\u7528 React \u6E32\u67D3\u5D4C\u5957\u7EC4\u4EF6","slug":"\u4F7F\u7528-react-\u6E32\u67D3\u5D4C\u5957\u7EC4\u4EF6"},{"level":3,"title":"\u4E8B\u4EF6\u5904\u7406","slug":"\u4E8B\u4EF6\u5904\u7406"},{"level":3,"title":"\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570","slug":"\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570"},{"level":3,"title":"\u6761\u4EF6\u6E32\u67D3","slug":"\u6761\u4EF6\u6E32\u67D3"},{"level":3,"title":"\u5217\u8868\u6E32\u67D3","slug":"\u5217\u8868\u6E32\u67D3"},{"level":3,"title":"\u8868\u5355","slug":"\u8868\u5355"},{"level":3,"title":"\u72B6\u6001\u63D0\u5347","slug":"\u72B6\u6001\u63D0\u5347"},{"level":3,"title":"hooks","slug":"hooks"}],"relativePath":"react/main-concepts.md","lastUpdated":1684201617048}',a={},l=n(`__VP_STATIC_START__<h1 id="react"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h1><h2 id="what"><a class="header-anchor" href="#what" aria-hidden="true">#</a> what</h2><blockquote><p>\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93</p></blockquote><ol><li>React \u4F7F\u521B\u5EFA\u4EA4\u4E92\u5F0F UI \u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u4E3A\u4F60\u5E94\u7528\u7684\u6BCF\u4E00\u4E2A\u72B6\u6001\u8BBE\u8BA1\u7B80\u6D01\u7684\u89C6\u56FE\uFF0C\u5F53\u6570\u636E\u53D8\u52A8\u65F6 React \u80FD\u9AD8\u6548\u66F4\u65B0\u5E76\u6E32\u67D3\u5408\u9002\u7684\u7EC4\u4EF6\u3002</li><li>\u6784\u5EFA\u7BA1\u7406\u81EA\u8EAB\u72B6\u6001\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u7136\u540E\u5BF9\u5176\u7EC4\u5408\u4EE5\u6784\u6210\u590D\u6742\u7684 UI\u3002</li><li>\u65E0\u8BBA\u4F60\u73B0\u5728\u4F7F\u7528\u4EC0\u4E48\u6280\u672F\u6808\uFF0C\u5728\u65E0\u9700\u91CD\u5199\u73B0\u6709\u4EE3\u7801\u7684\u524D\u63D0\u4E0B\uFF0C\u901A\u8FC7\u5F15\u5165 React \u6765\u5F00\u53D1\u65B0\u529F\u80FD\u3002</li></ol><h2 id="how"><a class="header-anchor" href="#how" aria-hidden="true">#</a> how</h2><h3 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3><div class="language-"><pre><code>npx install create-react-app
</code></pre></div><h3 id="\u6E32\u67D3-dom-\u6811"><a class="header-anchor" href="#\u6E32\u67D3-dom-\u6811" aria-hidden="true">#</a> \u6E32\u67D3 DOM \u6811</h3><div class="language-"><pre><code>ReactDOM.render(componentToRender, targetNode)
</code></pre></div><h3 id="jsx-\u8BED\u6CD5\u89C4\u5219"><a class="header-anchor" href="#jsx-\u8BED\u6CD5\u89C4\u5219" aria-hidden="true">#</a> JSX \u8BED\u6CD5\u89C4\u5219</h3><div class="language-"><pre><code>  1. \u5B9A\u4E49\u865A\u62DFDOM\u65F6,\u4E0D\u8981\u5199\u5F15\u53F7
   2. \u6807\u7B7E\u4E2D\u6DF7\u5165JS\u8868\u8FBE\u5F0F\u8981\u7528{}
   3. \u6837\u5F0F\u7684\u7C7B\u540D\u6307\u5B9A\u4E0D\u8981\u7528class, \u8981\u7528className
   4. \u5185\u8054\u6837\u5F0F,\u8981\u7528style:{{key:value}}
   5. \u53EA\u6709\u4E00\u4E2A\u6839\u6807\u7B7E
   6. \u6807\u7B7E\u5FC5\u987B\u8981\u95ED\u5408
   7. \u6807\u7B7E\u9996\u5B57\u6BCD
      1. \u82E5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934,\u6807\u7B7E\u8F6C\u4E3Ahtml\u540C\u540D\u5143\u7D20
      2. \u82E5\u5927\u5199\u5B57\u6BCD\u5F00\u5934,\u6E32\u67D3\u81EA\u5B9A\u4E49\u7EC4\u4EF6
</code></pre></div><h3 id="\u521B\u5EFA\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u51FD\u6570\u7EC4\u4EF6"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u51FD\u6570\u7EC4\u4EF6</h3><div class="language-"><pre><code>const DemoComponent = function() {
  return (
    &lt;div className=&#39;customClass&#39; /&gt;
  );
};
</code></pre></div><h3 id="\u4F7F\u7528-class-\u8BED\u6CD5\u521B\u5EFA\u7EC4\u4EF6"><a class="header-anchor" href="#\u4F7F\u7528-class-\u8BED\u6CD5\u521B\u5EFA\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528 class \u8BED\u6CD5\u521B\u5EFA\u7EC4\u4EF6</h3><div class="language-"><pre><code>class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;h1&gt;Hi&lt;/h1&gt;
    );
  }
}
</code></pre></div><h3 id="\u7528\u7EC4\u5408\u7684\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A-react-\u7EC4\u4EF6"><a class="header-anchor" href="#\u7528\u7EC4\u5408\u7684\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A-react-\u7EC4\u4EF6" aria-hidden="true">#</a> \u7528\u7EC4\u5408\u7684\u65B9\u5F0F\u521B\u5EFA\u4E00\u4E2A React \u7EC4\u4EF6</h3><div class="language-"><pre><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}

function App() {
  return (
    &lt;div&gt;
      &lt;Welcome name=&quot;Sara&quot; /&gt;
      &lt;Welcome name=&quot;Cahal&quot; /&gt;
      &lt;Welcome name=&quot;Edite&quot; /&gt;
    &lt;/div&gt;
  );
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;));

</code></pre></div><h3 id="prop-\u4F20\u53C2"><a class="header-anchor" href="#prop-\u4F20\u53C2" aria-hidden="true">#</a> prop \u4F20\u53C2</h3><div class="language-"><pre><code>1. const element = &lt;Welcome name=&quot;Sara&quot; /&gt;;
2. return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
</code></pre></div><h3 id="\u4F7F\u7528-react-\u6E32\u67D3\u5D4C\u5957\u7EC4\u4EF6"><a class="header-anchor" href="#\u4F7F\u7528-react-\u6E32\u67D3\u5D4C\u5957\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528 React \u6E32\u67D3\u5D4C\u5957\u7EC4\u4EF6</h3><h3 id="\u4E8B\u4EF6\u5904\u7406"><a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u4E8B\u4EF6\u5904\u7406</h3><div class="language-"><pre><code>&lt;button onClick={activateLasers}&gt;
  Activate Lasers
&lt;/button&gt;
</code></pre></div><h3 id="\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570"><a class="header-anchor" href="#\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570</h3><div class="language-"><pre><code>&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row&lt;/button&gt;
&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;
</code></pre></div><h3 id="\u6761\u4EF6\u6E32\u67D3"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3</h3><div class="language-"><pre><code>class LoginControl extends React.Component {
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
      button = &lt;LogoutButton onClick={this.handleLogoutClick} /&gt;;
    } else {
      button = &lt;LoginButton onClick={this.handleLoginClick} /&gt;;
    }

    return (
      &lt;div&gt;
        &lt;Greeting isLoggedIn={isLoggedIn} /&gt;
        {button}
      &lt;/div&gt;
    );
  }
}

ReactDOM.render(
  &lt;LoginControl /&gt;,
  document.getElementById(&#39;root&#39;)
);
</code></pre></div><h3 id="\u5217\u8868\u6E32\u67D3"><a class="header-anchor" href="#\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> \u5217\u8868\u6E32\u67D3</h3><div class="language-"><pre><code>const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =&gt;
  &lt;li key={number.toString()}&gt;
    {number}
  &lt;/li&gt;
);
</code></pre></div><h3 id="\u8868\u5355"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h3><div class="language-"><pre><code>class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: &#39;&#39;};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(&#39;\u63D0\u4EA4\u7684\u540D\u5B57: &#39; + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      &lt;form onSubmit={this.handleSubmit}&gt;
        &lt;label&gt;
          \u540D\u5B57:
          &lt;input type=&quot;text&quot; value={this.state.value} onChange={this.handleChange} /&gt;
        &lt;/label&gt;
        &lt;input type=&quot;submit&quot; value=&quot;\u63D0\u4EA4&quot; /&gt;
      &lt;/form&gt;
    );
  }
}
</code></pre></div><h3 id="\u72B6\u6001\u63D0\u5347"><a class="header-anchor" href="#\u72B6\u6001\u63D0\u5347" aria-hidden="true">#</a> \u72B6\u6001\u63D0\u5347</h3><blockquote><p>\u901A\u5E38\uFF0C\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u53CD\u6620\u76F8\u540C\u7684\u53D8\u5316\u6570\u636E\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5EFA\u8BAE\u5C06\u5171\u4EAB\u72B6\u6001\u63D0\u5347\u5230\u6700\u8FD1\u7684\u5171\u540C\u7236\u7EC4\u4EF6\u4E2D\u53BB\u3002\u8BA9\u6211\u4EEC\u770B\u770B\u5B83\u662F\u5982\u4F55\u8FD0\u4F5C\u7684\u3002</p></blockquote><div class="language-"><pre><code>
</code></pre></div><h3 id="hooks"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> hooks</h3><div class="language-"><pre><code>import React, { useState } from &#39;react&#39;;

function Example() {
  // \u58F0\u660E\u4E00\u4E2A\u65B0\u7684\u53EB\u505A \u201Ccount\u201D \u7684 state \u53D8\u91CF
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre></div>__VP_STATIC_END__`,35);function o(r,s,i,d,c,h){return e(),t("div",null,[l])}a.render=o;export{g as __pageData,a as default};
