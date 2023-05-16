import{r as R,a as pe,c as h,i as fe,b as Ve,m as ne,n as ze,w as Ge,d as k,h as H,p as C,e as P,f as B,g as p,j as u,t as S,u as l,o as f,k as b,l as K,q as he,s as _e,F as M,v as J,x as y,y as D,z as Ke,A as ve,B as F,C as Je,D as E,E as Xe}from"./framework.e6884fad.js";const Ye="modulepreload",se={},Qe="/",me=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${Qe}${s}`,s in se)return;se[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ye,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((i,d)=>{a.addEventListener("load",i),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};var Ze='{"lang":"en-US","title":"Shadow Blog","description":"shadow\u7684\u4E2A\u4EBA\u535A\u5BA2, \u8BB0\u5F55\u524D\u7AEF\u7684HTML\u3001CSS\uFF0CJavaScript\u7B49\u77E5\u8BC6\u70B9\uFF0C \u8BB0\u5F55\u7F16\u7A0B\u5FC3\u5F97\uFF0C\u5B66\u4E60\u7B14\u8BB0\uFF0C\u6709\u7528\u7684\u5DE5\u5177\uFF0C\u8BFB\u4E66\u7B14\u8BB0\u7B49","base":"/","head":[["meta",{"name":"keywords","content":"shadowBlog,shadow Blog, FE, \u524D\u7AEF, ChatGPT, Vercel, HTML, CSS,JavaScript, Vue, React"}],["meta",{"name":"baidu-site-verification","content":"code-codeva-rymI9IKvNP"}]],"themeConfig":{"nav":[{"text":"\u9996\u9875","link":"/"},{"text":"\u8BA1\u7B97\u673A\u57FA\u7840","items":[{"text":"\u64CD\u4F5C\u7CFB\u7EDF","link":"/basic/os"},{"text":"\u8BA1\u7B97\u673A\u7EC4\u6210\u539F\u7406","link":"/basic/computer_organization"},{"text":"\u6570\u636E\u5E93","link":"/basic/database"},{"text":"\u8BA1\u7B97\u673A\u7F51\u7EDC","link":"/basic/computer_net"},{"text":"\u7B97\u6CD5","link":"/basic/arithmetic"},{"text":"\u6570\u636E\u7ED3\u6784","link":"/basic/data_structure"},{"text":"\u8BBE\u8BA1\u6A21\u5F0F","link":"/basic/design_pattern"}]},{"text":"\u524D\u7AEF","items":[{"text":"Html","link":"/html/"},{"text":"Css","link":"/css/"},{"text":"JavaScript","link":"/js/"},{"text":"Vue","link":"/vue/"},{"text":"React","link":"/react/"},{"text":"Node","link":"/node/"},{"text":"Electron","link":"/electron/"},{"text":"uniAPP","link":"/uniAPP/"},{"text":"\u6570\u636E\u53EF\u89C6\u5316","link":"/fe/data_visualization"},{"text":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1","link":"/miniprogram"},{"text":"\u5FAE\u4FE1\u516C\u4F17\u53F7\u5F00\u53D1","link":"/fe/offiaccount"},{"text":"Webpack","link":"/webpack"},{"text":"\u5B89\u5353\u5F00\u53D1","link":"/android"},{"text":"WordPress","link":"/wordpress/"},{"text":"\u524D\u7AEF\u9762\u8BD5","link":"/fe-interview"},{"text":"\u524D\u7AEF\u5B89\u5168","link":"/security"}]},{"text":"\u8BBE\u8BA1","items":[{"text":"figma","link":"/figma"}]},{"text":"ChatGPT","items":[{"text":"\u8D44\u6599","link":"/ChatGPT/index"}]},{"text":"\u8FD0\u7EF4","items":[{"text":"Nginx","link":"/ops/nginx"},{"text":"Docker","link":"/ops/docker"},{"text":"Vercel","link":"/ops/vercel"}]},{"text":"English","link":"/english/"},{"text":"\u8BFB\u4E66\u7B14\u8BB0","link":"/book/"},{"text":"\u6280\u672F\u5BFC\u822A","link":"/open-source/"},{"text":"About","link":"/about/"}],"sidebar":{"/about/":[{"text":"Our Story","link":"/about/our-story"}],"/contact":[{"text":"Our Story","link":"/about/our-story"}]},"repo":"https://github.com/shadow198/shadowVuepress","repoLabel":"GitHub"},"locales":{},"customData":{}}';const et=/^https?:/i,$=typeof window!="undefined";function tt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return}function oe(e,t){const n=tt(t,Object.keys(e));return n?e[n]:void 0}function nt(e,t){t=st(e,t);const n=oe(e.locales||{},t)||{},s=oe(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...s,locales:{}},lang:s.lang||e.lang,locales:{}}}function st(e,t){if(!$)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const ge=Symbol(),X=R(ot(Ze));function ot(e){return pe(JSON.parse(e))}function at(e){const t=h(()=>nt(X.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{locales:n,lang:s}=t.value,o=Object.keys(n).find(r=>n[r].lang===s);return I(n&&o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function L(){const e=fe(ge);if(!e)throw new Error("vitepress data not properly injected in app");return e}function rt(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function I(e){return et.test(e)?e:rt(X.value.base,e)}function be(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),$){const n="/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const ke=Symbol(),ae="http://a.com",it=()=>({path:"/",component:null,data:null});function lt(e,t){const n=Ve(it());function s(a=$?location.href:"/"){const i=new URL(a,ae);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",a=i.pathname+i.search+i.hash),$&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",a)),r(a)}let o=null;async function r(a,i=0){const d=new URL(a,ae),c=o=d.pathname;try{let _=e(c);if("then"in _&&typeof _.then=="function"&&(_=await _),o===c){o=null;const{default:v,__pageData:x}=_;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=c,n.component=ne(v),n.data=pe(JSON.parse(x)),$&&ze(()=>{if(d.hash&&!i){const m=document.querySelector(decodeURIComponent(d.hash));if(m){re(m,d.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===c&&(o=null,n.path=c,n.component=t?ne(t):null)}}return $&&(window.addEventListener("click",a=>{const i=a.target.closest("a");if(i){const{href:d,protocol:c,hostname:_,pathname:v,hash:x,target:m}=i,w=window.location,T=v.match(/\.\w+$/);!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey&&m!=="_blank"&&c===w.protocol&&_===w.hostname&&!(T&&T[0]!==".html")&&(a.preventDefault(),v===w.pathname?x&&x!==w.hash&&(history.pushState(null,"",x),re(i,x,i.classList.contains("header-anchor"))):s(d))}},{capture:!0}),window.addEventListener("popstate",a=>{r(location.href,a.state&&a.state.scrollPosition||0)}),window.addEventListener("hashchange",a=>{a.preventDefault()})),{route:n,go:s}}function ct(){const e=fe(ke);if(!e)throw new Error("useRouter() is called without provider.");return e}function A(){return ct().route}function re(e,t,n=!1){const s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(s){const o=s.offsetTop;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}function ut(e,t){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],i=Math.min(n.length,r.length);for(let d=0;d<i;d++){let c=n[d];const[_,v,x=""]=r[d];if(c.tagName.toLocaleLowerCase()===_){for(const m in v)c.getAttribute(m)!==v[m]&&c.setAttribute(m,v[m]);for(let m=0;m<c.attributes.length;m++){const w=c.attributes[m].name;w in v||c.removeAttribute(w)}c.innerHTML!==x&&(c.innerHTML=x)}else document.head.removeChild(c),c=ie(r[d]),document.head.append(c);a.push(c)}n.slice(i).forEach(d=>document.head.removeChild(d)),r.slice(i).forEach(d=>{const c=ie(d);document.head.appendChild(c),a.push(c)}),n=a};Ge(()=>{const r=e.data,a=t.value,i=r&&r.title,d=r&&r.description,c=r&&r.frontmatter.head;document.title=(i?i+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",d||a.description),o([...c?pt(c):[]])})}function ie([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function dt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function pt(e){return e.filter(t=>!dt(t))}const ft=k({name:"VitePressContent",setup(){const e=A();return()=>H("div",{style:{position:"relative"}},[e.component?H(e.component):null])}});C("data-v-004f641c");const ht=u("p",{class:"title"},"Debug",-1),_t={class:"block"};P();var vt=k({setup(e){const t=L(),n=R(null),s=R(!1);return B(s,o=>{o===!1&&(n.value.scrollTop=0)}),(o,r)=>(f(),p("div",{class:["debug",{open:s.value}],ref:n,onClick:r[1]||(r[1]=a=>s.value=!s.value)},[ht,u("pre",_t,S(l(t)),1)],2))}});vt.__scopeId="data-v-004f641c";const mt=/#.*$/,gt=/(index)?\.(md|html)$/,N=/\/$/,bt=/^[a-z]+:/i;function Y(e){return Array.isArray(e)}function Q(e){return bt.test(e)}function kt(e,t){if(t===void 0)return!1;const n=le(`/${e.data.relativePath}`),s=le(t);return n===s}function le(e){return decodeURI(e).replace(mt,"").replace(gt,"")}function xt(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function V(e){return/^\//.test(e)?e:`/${e}`}function xe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function yt(e){return e===!1||e==="auto"||Y(e)}function $t(e){return e.children!==void 0}function wt(e){return Y(e)?e.length===0:!e}function Z(e,t){if(yt(e))return e;t=V(t);for(const n in e)if(t.startsWith(V(n)))return e[n];return"auto"}function ye(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:xe(n.link)}),$t(n)&&(t=[...t,...ye(n.children)]),t),[])}var $e=k({setup(e){const{site:t,theme:n,localePath:s}=L();return(o,r)=>(f(),p("a",{class:"nav-bar-title",href:l(s),"aria-label":`${l(t).title}, back to home`},[l(n).logo?(f(),p("img",{key:0,class:"logo",src:l(I)(l(n).logo),alt:"Logo"},null,8,["src"])):b("v-if",!0),K(" "+S(l(t).title),1)],8,["href","aria-label"]))}});$e.__scopeId="data-v-4a583abe";function Lt(){const e=A(),{site:t}=L();return h(()=>{const s=t.value.themeConfig.locales;if(!s)return null;const o=Object.keys(s);if(o.length<=1)return null;const r=$?t.value.base:"/",a=r.endsWith("/")?r.slice(0,-1):r,i=e.path.slice(a.length),d=o.find(m=>m==="/"?!1:i.startsWith(m)),c=d?i.substring(d.length-1):i,_=o.map(m=>{const w=m.endsWith("/")?m.slice(0,-1):m;return{text:s[m].label,link:`${w}${c}`}}),v=d||"/";return{text:s[v].selectText?s[v].selectText:"Languages",items:_}})}const St=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function Ct(){const{site:e}=L();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=Pt(n);return{text:Et(s,t.repoLabel),link:s}})}function Pt(e){return/^https?:/.test(e)?e:`https://github.com/${e}`}function Et(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=St.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function we(e){const t=A(),n=Q(e.value.link);return{props:h(()=>{const o=ce(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(o);else{const a=ce(I(e.value.link));r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?e.value.link:I(e.value.link),target:e.value.target||n?"_blank":null,rel:e.value.rel||n?"noopener noreferrer":null,"aria-label":e.value.ariaLabel}}),isExternal:n}}function ce(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const q={},At={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Tt=u("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Rt=u("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);function Ht(e,t){return f(),p("svg",At,[Tt,Rt])}q.render=Ht;C("data-v-641633f9");const It={class:"nav-link"};P();var z=k({props:{item:{type:null,required:!0}},setup(e){const n=he(e),{props:s,isExternal:o}=we(n.item);return(r,a)=>(f(),p("div",It,[u("a",_e({class:"item"},l(s)),[K(S(e.item.text)+" ",1),l(o)?(f(),p(q,{key:0})):b("v-if",!0)],16)]))}});z.__scopeId="data-v-641633f9";C("data-v-57d767ef");const Bt={class:"nav-dropdown-link-item"},Dt=u("span",{class:"arrow"},null,-1),Ut={class:"text"},Nt={class:"icon"};P();var Le=k({props:{item:{type:null,required:!0}},setup(e){const n=he(e),{props:s,isExternal:o}=we(n.item);return(r,a)=>(f(),p("div",Bt,[u("a",_e({class:"item"},l(s)),[Dt,u("span",Ut,S(e.item.text),1),u("span",Nt,[l(o)?(f(),p(q,{key:0})):b("v-if",!0)])],16)]))}});Le.__scopeId="data-v-57d767ef";C("data-v-90f2c308");const Ot={class:"button-text"},Mt={class:"dialog"};P();var G=k({props:{item:{type:null,required:!0}},setup(e){const t=A(),n=R(!1);B(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(f(),p("div",{class:["nav-dropdown-link",{open:n.value}]},[u("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[u("span",Ot,S(e.item.text),1),u("span",{class:["button-arrow",n.value?"down":"right"]},null,2)],8,["aria-label"]),u("ul",Mt,[(f(!0),p(M,null,J(e.item.items,a=>(f(),p("li",{key:a.text,class:"dialog-item"},[u(Le,{item:a},null,8,["item"])]))),128))])],2))}});G.__scopeId="data-v-90f2c308";C("data-v-15acbf05");const qt={key:0,class:"nav-links"},Wt={key:1,class:"item"},jt={key:2,class:"item"};P();var ee=k({setup(e){const{theme:t}=L(),n=Lt(),s=Ct(),o=h(()=>t.value.nav||s.value||n.value);return(r,a)=>l(o)?(f(),p("nav",qt,[l(t).nav?(f(!0),p(M,{key:0},J(l(t).nav,i=>(f(),p("div",{key:i.text,class:"item"},[i.items?(f(),p(G,{key:0,item:i},null,8,["item"])):(f(),p(z,{key:1,item:i},null,8,["item"]))]))),128)):b("v-if",!0),l(n)?(f(),p("div",Wt,[u(G,{item:l(n)},null,8,["item"])])):b("v-if",!0),l(s)?(f(),p("div",jt,[u(z,{item:l(s)},null,8,["item"])])):b("v-if",!0)])):b("v-if",!0)}});ee.__scopeId="data-v-15acbf05";var Se={emits:["toggle"]};const Ft=u("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[u("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);function Vt(e,t,n,s,o,r){return f(),p("div",{class:"sidebar-button",onClick:t[1]||(t[1]=a=>e.$emit("toggle"))},[Ft])}Se.render=Vt;C("data-v-7161a24b");const zt={class:"nav-bar"},Gt=u("div",{class:"flex-grow"},null,-1),Kt={class:"nav"};P();var Ce=k({emits:["toggle"],setup(e){return(t,n)=>(f(),p("header",zt,[u(Se,{onToggle:n[1]||(n[1]=s=>t.$emit("toggle"))}),u($e),Gt,u("div",Kt,[u(ee)]),y(t.$slots,"search",{},void 0,!0)]))}});Ce.__scopeId="data-v-7161a24b";function Jt(){let e=null,t=null;const n=en(s,300);function s(){const a=Xt(),i=Yt(a);for(let d=0;d<i.length;d++){const c=i[d],_=i[d+1],[v,x]=Zt(d,c,_);if(v){history.replaceState(null,document.title,x||" "),o(x);return}}}function o(a){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${a}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function r(a){a&&a.classList.remove("active")}D(()=>{s(),window.addEventListener("scroll",n)}),Ke(()=>{o(decodeURIComponent(location.hash))}),ve(()=>{window.removeEventListener("scroll",n)})}function Xt(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Yt(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Qt(){return document.querySelector(".nav-bar").offsetHeight}function ue(e){const t=Qt();return e.parentElement.offsetTop-t-15}function Zt(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ue(t)?[!1,null]:!n||s<ue(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function en(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function tn(){const e=A(),{site:t}=L();return Jt(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return de(n,o);const r=Z(t.value.themeConfig.sidebar,e.data.relativePath);return r===!1?[]:r==="auto"?de(n,o):r})}function de(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:r,slug:a})=>{if(o-1>t)return;const i={text:r,link:`#${a}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Pe=e=>{const t=A(),{site:n,frontmatter:s}=L(),o=e.depth||1,r=s.value.sidebarDepth||1/0,a=t.data.headers,i=e.item.text,d=nn(n.value.base,e.item.link),c=e.item.children,_=kt(t,e.item.link),v=o<r?Ee(_,c,a,o+1):null;return H("li",{class:"sidebar-link"},[H(d?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:d},i),v])};function nn(e,t){return t===void 0||t.startsWith("#")?t:xt(e,t)}function Ee(e,t,n,s=1){return t&&t.length>0?H("ul",{class:"sidebar-links"},t.map(o=>H(Pe,{item:o,depth:s}))):e&&n?Ee(!1,sn(n),void 0,s):null}function sn(e){return Ae(on(e))}function on(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ae(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ae(t.children):void 0}))}const an={key:0,class:"sidebar-links"};var rn=k({setup(e){const t=tn();return(n,s)=>l(t).length>0?(f(),p("ul",an,[(f(!0),p(M,null,J(l(t),o=>(f(),p(l(Pe),{item:o},null,8,["item"]))),256))])):b("v-if",!0)}}),Te=k({props:{open:{type:Boolean,required:!0}},setup(e){return(t,n)=>(f(),p("aside",{class:["sidebar",{open:e.open}]},[u(ee,{class:"nav"}),y(t.$slots,"sidebar-top",{},void 0,!0),u(rn),y(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});Te.__scopeId="data-v-6b49cdcd";const ln=/bitbucket.org/;function cn(){const{page:e,theme:t,frontmatter:n}=L(),s=h(()=>{const{repo:r,docsDir:a="",docsBranch:i="master",docsRepo:d=r,editLinks:c}=t.value,_=n.value.editLink||c,{relativePath:v}=e.value;return!_||!v||!r?null:un(r,d,a,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function un(e,t,n,s,o){return ln.test(e)?pn(e,t,n,s,o):dn(e,t,n,s,o)}function dn(e,t,n,s,o){return(Q(t)?t:`https://github.com/${t}`).replace(N,"")+`/edit/${s}/`+(n?n.replace(N,"")+"/":"")+o}function pn(e,t,n,s,o){return(Q(t)?t:e).replace(N,"")+`/src/${s}/`+(n?n.replace(N,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}C("data-v-1ed99556");const fn={class:"edit-link"};P();var Re=k({setup(e){const{url:t,text:n}=cn();return(s,o)=>(f(),p("div",fn,[l(t)?(f(),p("a",{key:0,class:"link",href:l(t),target:"_blank",rel:"noopener noreferrer"},[K(S(l(n))+" ",1),u(q,{class:"icon"})],8,["href"])):b("v-if",!0)]))}});Re.__scopeId="data-v-1ed99556";C("data-v-5797b537");const hn={key:0,class:"last-updated"},_n={class:"prefix"},vn={class:"datetime"};P();var He=k({setup(e){const{theme:t,page:n}=L(),s=h(()=>{const a=t.value.lastUpdated;return a!==void 0&&a!==!1}),o=h(()=>{const a=t.value.lastUpdated;return a===!0?"Last Updated":a}),r=R("");return D(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,i)=>l(s)?(f(),p("p",hn,[u("span",_n,S(l(o))+":",1),u("span",vn,S(r.value),1)])):b("v-if",!0)}});He.__scopeId="data-v-5797b537";C("data-v-fb8d84c6");const mn={class:"page-footer"},gn={class:"edit"},bn={class:"updated"};P();var Ie=k({setup(e){return(t,n)=>(f(),p("footer",mn,[u("div",gn,[u(Re)]),u("div",bn,[u(He)])]))}});Ie.__scopeId="data-v-fb8d84c6";function kn(){const{page:e,theme:t}=L(),n=h(()=>xe(V(e.value.relativePath))),s=h(()=>{const d=Z(t.value.sidebar,n.value);return Y(d)?ye(d):[]}),o=h(()=>s.value.findIndex(d=>d.link===n.value)),r=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:i}}const Be={},xn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},yn=u("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1);function $n(e,t){return f(),p("svg",xn,[yn])}Be.render=$n;const De={},wn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ln=u("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1);function Sn(e,t){return f(),p("svg",wn,[Ln])}De.render=Sn;C("data-v-38ede35f");const Cn={key:0,class:"next-and-prev-link"},Pn={class:"container"},En={class:"prev"},An={class:"text"},Tn={class:"next"},Rn={class:"text"};P();var Ue=k({setup(e){const{hasLinks:t,prev:n,next:s}=kn();return(o,r)=>l(t)?(f(),p("div",Cn,[u("div",Pn,[u("div",En,[l(n)?(f(),p("a",{key:0,class:"link",href:l(I)(l(n).link)},[u(Be,{class:"icon icon-prev"}),u("span",An,S(l(n).text),1)],8,["href"])):b("v-if",!0)]),u("div",Tn,[l(s)?(f(),p("a",{key:0,class:"link",href:l(I)(l(s).link)},[u("span",Rn,S(l(s).text),1),u(De,{class:"icon icon-next"})],8,["href"])):b("v-if",!0)])])])):b("v-if",!0)}});Ue.__scopeId="data-v-38ede35f";C("data-v-7eddb2c4");const Hn={class:"page"},In={class:"container"};P();var Ne=k({setup(e){return(t,n)=>{const s=F("Content");return f(),p("main",Hn,[u("div",In,[y(t.$slots,"top",{},void 0,!0),u(s,{class:"content"}),u(Ie),u(Ue),y(t.$slots,"bottom",{},void 0,!0)])])}}});Ne.__scopeId="data-v-7eddb2c4";const Bn={key:0,id:"ads-container"};var Dn=k({setup(e){const t=Je(()=>me(()=>import("./Home.07c92756.js"),["assets/Home.07c92756.js","assets/framework.e6884fad.js"])),n=()=>null,s=n,o=n,r=n,a=A(),{site:i,page:d,theme:c,frontmatter:_}=L(),v=h(()=>!!_.value.customLayout),x=h(()=>!!_.value.home),m=h(()=>Object.keys(c.value.locales||{}).length>0),w=h(()=>{const g=c.value;return _.value.navbar===!1||g.navbar===!1?!1:i.value.title||g.logo||g.repo||g.nav}),T=R(!1),Me=h(()=>_.value.home||_.value.sidebar===!1?!1:!wt(Z(c.value.sidebar,a.data.relativePath))),W=g=>{T.value=typeof g=="boolean"?g:!T.value},qe=W.bind(null,!1);B(a,qe);const We=h(()=>[{"no-navbar":!w.value,"sidebar-open":T.value,"no-sidebar":!Me.value}]);return(g,te)=>{const je=F("Content"),Fe=F("Debug");return f(),p(M,null,[u("div",{class:["theme",l(We)]},[l(w)?(f(),p(Ce,{key:0,onToggle:W},{search:E(()=>[y(g.$slots,"navbar-search",{},()=>[l(c).algolia?(f(),p(l(r),{options:l(c).algolia,multilang:l(m),key:l(i).lang},null,8,["options","multilang"])):b("v-if",!0)])]),_:1})):b("v-if",!0),u(Te,{open:T.value},{"sidebar-top":E(()=>[y(g.$slots,"sidebar-top")]),"sidebar-bottom":E(()=>[y(g.$slots,"sidebar-bottom")]),_:1},8,["open"]),b(" TODO: make this button accessible "),u("div",{class:"sidebar-mask",onClick:te[1]||(te[1]=Xn=>W(!1))}),l(v)?(f(),p(je,{key:1})):l(x)?(f(),p(l(t),{key:2},{hero:E(()=>[y(g.$slots,"home-hero")]),features:E(()=>[y(g.$slots,"home-features")]),footer:E(()=>[y(g.$slots,"home-footer")]),_:1})):(f(),p(Ne,{key:3},{top:E(()=>[y(g.$slots,"page-top-ads",{},()=>[l(c).carbonAds&&l(c).carbonAds.carbon?(f(),p("div",Bn,[u(l(s),{key:"carbon"+l(d).relativePath,code:l(c).carbonAds.carbon,placement:l(c).carbonAds.placement},null,8,["code","placement"])])):b("v-if",!0)]),y(g.$slots,"page-top")]),bottom:E(()=>[y(g.$slots,"page-bottom"),y(g.$slots,"page-bottom-ads",{},()=>[l(c).carbonAds&&l(c).carbonAds.custom?(f(),p(l(o),{key:"custom"+l(d).relativePath,code:l(c).carbonAds.custom,placement:l(c).carbonAds.placement},null,8,["code","placement"])):b("v-if",!0)])]),_:1}))],2),u(Fe)],64)}}});const Un={class:"theme"},Nn=u("h1",null,"404",-1);var On=k({setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function n(){return t[Math.floor(Math.random()*t.length)]}return(s,o)=>(f(),p("div",Un,[Nn,u("blockquote",null,S(n()),1),u("a",{href:s.$site.base,"aria-label":"go to home"},"Take me home.",8,["href"])]))}});const O={Layout:Dn,NotFound:On},j=new Set,Oe=()=>document.createElement("link"),Mn=e=>{const t=Oe();t.rel="prefetch",t.href=e,document.head.appendChild(t)},qn=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let U;const Wn=$&&(U=Oe())&&U.relList&&U.relList.supports&&U.relList.supports("prefetch")?Mn:qn;function jn(){if(!$||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const i=a.target;n.unobserve(i);const{pathname:d}=i;if(!j.has(d)){j.add(d);const c=be(d);Wn(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:i,pathname:d}=r,c=d.match(/\.\w+$/);c&&c[0]!==".html"||a!=="_blank"&&i===location.hostname&&(d!==location.pathname?n.observe(r):j.add(d))})})};D(s);const o=A();B(()=>o.path,s),ve(()=>{n&&n.disconnect()})}const Fn=k({setup(e,{slots:t}){const n=R(!1);return D(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),Vn=O.NotFound||(()=>"404 Not Found"),zn={name:"VitePressApp",setup(){const{site:e}=L();return D(()=>{B(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),jn(),()=>H(O.Layout)}};function Gn(){const e=Jn(),t=Kn();t.provide(ke,e);const n=at(e.route);return t.provide(ge,n),$&&ut(e.route,n.site),t.component("Content",ft),t.component("ClientOnly",Fn),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),O.enhanceApp&&O.enhanceApp({app:t,router:e,siteData:X}),{app:t,router:e}}function Kn(){return Xe(zn)}function Jn(){let e=$,t;return lt(n=>{let s=be(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),$?(e=!1,me(()=>import(s),[])):require(s)},Vn)}if($){const{app:e,router:t}=Gn();t.go().then(()=>{e.mount("#app")})}export{z as _,Gn as createApp,L as u,I as w};