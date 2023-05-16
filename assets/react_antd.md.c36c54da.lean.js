import{o as e,g as t,G as r}from"./framework.e6884fad.js";const p='{"title":"\u76F8\u5173\u7F51\u7AD9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F8\u5173\u7F51\u7AD9","slug":"\u76F8\u5173\u7F51\u7AD9"},{"level":2,"title":"\u5B66\u4E60\u7B14\u8BB0","slug":"\u5B66\u4E60\u7B14\u8BB0"},{"level":3,"title":"UIM Html\u6A21\u677F","slug":"uim-html\u6A21\u677F"},{"level":3,"title":"UMI\u8DEF\u7531","slug":"umi\u8DEF\u7531"},{"level":3,"title":"\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\u9875\u9762","slug":"\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\u9875\u9762"},{"level":3,"title":"useRequest","slug":"userequest"},{"level":3,"title":"react router","slug":"react-router"},{"level":3,"title":"React Hooks","slug":"react-hooks"},{"level":3,"title":"Umi Hooks","slug":"umi-hooks"},{"level":2,"title":"dva","slug":"dva"},{"level":2,"title":"umi-fabric","slug":"umi-fabric"},{"level":2,"title":"\u751F\u547D\u5468\u671F","slug":"\u751F\u547D\u5468\u671F"},{"level":2,"title":"React.memo","slug":"react-memo"},{"level":2,"title":"useState\u66F4\u65B0\u5BF9\u8C61","slug":"usestate\u66F4\u65B0\u5BF9\u8C61"}],"relativePath":"react/antd.md","lastUpdated":1684203866047}',a={},o=r(`__VP_STATIC_START__<h2 id="\u76F8\u5173\u7F51\u7AD9"><a class="header-anchor" href="#\u76F8\u5173\u7F51\u7AD9" aria-hidden="true">#</a> \u76F8\u5173\u7F51\u7AD9</h2><ul><li><a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">Ant Design \u5B98\u7F51</a></li><li><a href="https://umijs.org/zh-CN" target="_blank" rel="noopener noreferrer">UmiJS \u5B98\u7F51</a></li><li><a href="https://pro.ant.design/zh-CN/" target="_blank" rel="noopener noreferrer">ANT DESIGN PRO \u5B98\u7F51</a></li><li><a href="https://procomponents.ant.design/" target="_blank" rel="noopener noreferrer">procompoents \u5B98\u7F51, Antd\u7EC4\u4EF6\u9AD8\u7EA7\u5C01\u88C5</a></li><li><a href="https://preview.pro.ant.design/dashboard/analysis/" target="_blank" rel="noopener noreferrer">\u9884\u89C8\u7AD9\u70B9,\u53EF\u52A8\u6001\u62F7\u8D1D\u914D\u7F6E</a></li><li></li></ul><h2 id="\u5B66\u4E60\u7B14\u8BB0"><a class="header-anchor" href="#\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> \u5B66\u4E60\u7B14\u8BB0</h2><h3 id="uim-html\u6A21\u677F"><a class="header-anchor" href="#uim-html\u6A21\u677F" aria-hidden="true">#</a> UIM Html\u6A21\u677F</h3><p><a href="https://umijs.org/zh-CN/docs/html-template" target="_blank" rel="noopener noreferrer">https://umijs.org/zh-CN/docs/html-template</a></p><h3 id="umi\u8DEF\u7531"><a class="header-anchor" href="#umi\u8DEF\u7531" aria-hidden="true">#</a> UMI\u8DEF\u7531</h3><p><a href="https://umijs.org/zh-CN/docs/routing" target="_blank" rel="noopener noreferrer">https://umijs.org/zh-CN/docs/routing</a></p><h3 id="\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\u9875\u9762"><a class="header-anchor" href="#\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\u9875\u9762" aria-hidden="true">#</a> \u901A\u8FC7\u547D\u4EE4\u521B\u5EFA\u9875\u9762</h3><div class="language-"><pre><code>npx umi g page products --typescript
</code></pre></div><h3 id="userequest"><a class="header-anchor" href="#userequest" aria-hidden="true">#</a> useRequest</h3><p><a href="https://hooks.umijs.org/zh-CN/hooks/async" target="_blank" rel="noopener noreferrer">https://hooks.umijs.org/zh-CN/hooks/async</a></p><ul><li>\u81EA\u52A8\u8BF7\u6C42/\u624B\u52A8\u8BF7\u6C42</li><li>SWR(stale-while-revalidate)</li><li>\u7F13\u5B58/\u9884\u52A0\u8F7D</li><li>\u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42</li><li>\u8F6E\u8BE2</li><li>\u9632\u6296</li><li>\u8282\u6D41</li><li>\u5E76\u884C\u8BF7\u6C42</li><li>loading delay</li><li>\u5206\u9875</li><li>\u52A0\u8F7D\u66F4\u591A\uFF0C\u6570\u636E\u6062\u590D + \u6EDA\u52A8\u4F4D\u7F6E\u6062\u590D</li><li>\u9519\u8BEF\u91CD\u8BD5</li><li>\u8BF7\u6C42\u8D85\u65F6\u7BA1\u7406</li><li>suspense</li></ul><div class="language-"><pre><code>import { useRequest } from &#39;@umijs/hooks&#39;;
import Mock from &#39;mockjs&#39;;
import React from &#39;react&#39;;
function getUsername(): Promise&lt;string&gt; {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(Mock.mock(&#39;@name&#39;));
    }, 1000);
  });
}
export default () =&gt; {
  const { data, error, loading } = useRequest(getUsername)
  if (error) {
    return &lt;div&gt;failed to load&lt;/div&gt;
  }
  if (loading) {
    return &lt;div&gt;loading...&lt;/div&gt;
  }
  return &lt;div&gt;Username: {data}&lt;/div&gt;
}
</code></pre></div><h3 id="react-router"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> react router</h3><p><a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">https://reactrouter.com/</a></p><h3 id="react-hooks"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> React Hooks</h3><blockquote><p>Hook \u662F\u4EC0\u4E48\uFF1F Hook \u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u51FD\u6570\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u201C\u94A9\u5165\u201D React \u7684\u7279\u6027\u3002\u4F8B\u5982\uFF0CuseState \u662F\u5141\u8BB8\u4F60\u5728 React \u51FD\u6570\u7EC4\u4EF6\u4E2D\u6DFB\u52A0 state \u7684 Hook\u3002\u7A0D\u540E\u6211\u4EEC\u5C06\u5B66\u4E60\u5176\u4ED6 Hook\u3002</p></blockquote><blockquote><p>\u4EC0\u4E48\u65F6\u5019\u6211\u4F1A\u7528 Hook\uFF1F \u5982\u679C\u4F60\u5728\u7F16\u5199\u51FD\u6570\u7EC4\u4EF6\u5E76\u610F\u8BC6\u5230\u9700\u8981\u5411\u5176\u6DFB\u52A0\u4E00\u4E9B state\uFF0C\u4EE5\u524D\u7684\u505A\u6CD5\u662F\u5FC5\u987B\u5C06\u5176\u8F6C\u5316\u4E3A class\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5728\u73B0\u6709\u7684\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528 Hook\u3002</p></blockquote><h4 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h4><div class="language-"><pre><code>import React, { useState } from &#39;react&#39;;

function Example() {
  // \u58F0\u660E\u4E00\u4E2A\u53EB \u201Ccount\u201D \u7684 state \u53D8\u91CF
  const [count, setCount] = useState(0);
}
</code></pre></div><h3 id="umi-hooks"><a class="header-anchor" href="#umi-hooks" aria-hidden="true">#</a> Umi Hooks</h3><p><a href="https://hooks.umijs.org/zh-CN" target="_blank" rel="noopener noreferrer">https://hooks.umijs.org/zh-CN</a></p><h2 id="dva"><a class="header-anchor" href="#dva" aria-hidden="true">#</a> dva</h2><p><a href="https://dvajs.com/" target="_blank" rel="noopener noreferrer">https://dvajs.com/</a></p><h2 id="umi-fabric"><a class="header-anchor" href="#umi-fabric" aria-hidden="true">#</a> umi-fabric</h2><p><a href="https://github.com/umijs/fabric" target="_blank" rel="noopener noreferrer">https://github.com/umijs/fabric</a></p><h2 id="\u751F\u547D\u5468\u671F"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><p><a href="https://imgtu.com/i/hnSCyd" target="_blank" rel="noopener noreferrer"><img src="https://z3.ax1x.com/2021/08/26/hnSCyd.png" alt="hnSCyd.png"></a></p><h2 id="react-memo"><a class="header-anchor" href="#react-memo" aria-hidden="true">#</a> React.memo</h2><blockquote><p>\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u5728\u76F8\u540C props \u7684\u60C5\u51B5\u4E0B\u6E32\u67D3\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u901A\u8FC7\u5C06\u5176\u5305\u88C5\u5728 React.memo \u4E2D\u8C03\u7528\uFF0C\u4EE5\u6B64\u901A\u8FC7\u8BB0\u5FC6\u7EC4\u4EF6\u6E32\u67D3\u7ED3\u679C\u7684\u65B9\u5F0F\u6765\u63D0\u9AD8\u7EC4\u4EF6\u7684\u6027\u80FD\u8868\u73B0\u3002\u8FD9\u610F\u5473\u7740\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CReact \u5C06\u8DF3\u8FC7\u6E32\u67D3\u7EC4\u4EF6\u7684\u64CD\u4F5C\u5E76\u76F4\u63A5\u590D\u7528\u6700\u8FD1\u4E00\u6B21\u6E32\u67D3\u7684\u7ED3\u679C\u3002</p></blockquote><div class="language-"><pre><code>const MyComponent = React.memo(function MyComponent(props) {
  /* \u4F7F\u7528 props \u6E32\u67D3 */
});
</code></pre></div><h2 id="usestate\u66F4\u65B0\u5BF9\u8C61"><a class="header-anchor" href="#usestate\u66F4\u65B0\u5BF9\u8C61" aria-hidden="true">#</a> useState\u66F4\u65B0\u5BF9\u8C61</h2><blockquote><p>\u66F4\u65B0\u5BF9\u8C61\u65F6,\u9700\u8981\u5728\u521D\u59CB\u5316\u5B9A\u4E49\u5BF9\u8C61\u7684\u6570\u636E\u7ED3\u6784</p></blockquote><div class="language-"><pre><code>import React, { useState } from &#39;react&#39;;

export default () =&gt; {
  const [state, setState] = useState({
    count: 0,
    count2: 0,
    name: &#39;aaa&#39;,
  });

  const click = () =&gt; {
    setState({
      ...state,
      count: state.count + 1,
    });
  };
  const change = () =&gt; {
    setState({
      ...state,
      name: &#39;bbb&#39;,
    });
  };
  return (
    &lt;div&gt;
      &lt;div&gt;
        count:{state.count},name:{state.name}
      &lt;/div&gt;
      &lt;button onClick={click}&gt;+1&lt;/button&gt;
      &lt;button onClick={change}&gt;name&lt;/button&gt;
    &lt;/div&gt;
  );
};
</code></pre></div>__VP_STATIC_END__`,34);function n(l,i,s,h,c,u){return e(),t("div",null,[o])}a.render=n;export{p as __pageData,a as default};
