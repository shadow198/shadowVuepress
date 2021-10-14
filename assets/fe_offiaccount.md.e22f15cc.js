import{o as e,c as a,a as l}from"./app.e6be7eca.js";const o='{"title":"微信公众号开发","description":"","frontmatter":{},"headers":[{"level":2,"title":"两种服务模式","slug":"两种服务模式"}],"relativePath":"fe/offiaccount.md","lastUpdated":1634205936025}',t={},i=l('<h1 id="微信公众号开发"><a class="header-anchor" href="#微信公众号开发" aria-hidden="true">#</a> 微信公众号开发</h1><blockquote><p>为了识别用户，每个用户针对每个公众号会产生一个安全的OpenID，如果需要在多公众号、移动应用之间做用户共通，则需前往微信开放平台，将这些公众号和应用绑定到一个开放平台账号下，绑定后，一个用户虽然对多个公众号和应用有多个不同的OpenID，但他对所有这些同一开放平台账号下的公众号和应用，只有一个UnionID，可以在用户管理-获取用户基本信息（UnionID机制）</p></blockquote><h2 id="两种服务模式"><a class="header-anchor" href="#两种服务模式" aria-hidden="true">#</a> 两种服务模式</h2><ol><li>公众号消息会话</li></ol><blockquote><p>公众号是以微信用户的一个联系人形式存在的，消息会话是公众号与用户交互的基础。目前公众号内主要有这样几类消息服务的类型，分别用于不同的场景。</p></blockquote><ol start="2"><li>公众号内网页 <ol><li>网页授权获取用户基本信息：通过该接口，可以获取用户的基本信息（获取用户的OpenID是无需用户同意的，获取用户的基本信息则需用户同意）</li><li>微信JS-SDK：是开发者在网页上通过JavaScript代码使用微信原生功能的工具包，开发者可以使用它在网页上录制和播放微信语音、监听微信分享、上传手机本地图片、拍照等许多能力</li></ol></li></ol>',6);t.render=function(l,o,t,r,n,c){return e(),a("div",null,[i])};export{o as __pageData,t as default};