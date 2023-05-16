import{o as l,g as a,G as e}from"./framework.e6884fad.js";const _='{"title":"\u64CD\u4F5C\u7CFB\u7EDF","description":"","frontmatter":{},"headers":[{"level":2,"title":"shell","slug":"shell"},{"level":3,"title":"shebang(\u6307\u5B9A\u89E3\u91CA\u5668)","slug":"shebang-\u6307\u5B9A\u89E3\u91CA\u5668"},{"level":3,"title":"\u6CE8\u91CA","slug":"\u6CE8\u91CA"},{"level":3,"title":"\u6267\u884C\u811A\u672C\u7684\u65B9\u5F0F","slug":"\u6267\u884C\u811A\u672C\u7684\u65B9\u5F0F"},{"level":3,"title":"shell\u4E0E\u8FD0\u7EF4","slug":"shell\u4E0E\u8FD0\u7EF4"},{"level":3,"title":"bash","slug":"bash"}],"relativePath":"basic/os.md","lastUpdated":1684203866043}',i={},h=e('<h1 id="\u64CD\u4F5C\u7CFB\u7EDF"><a class="header-anchor" href="#\u64CD\u4F5C\u7CFB\u7EDF" aria-hidden="true">#</a> \u64CD\u4F5C\u7CFB\u7EDF</h1><h2 id="shell"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h2><h3 id="shebang-\u6307\u5B9A\u89E3\u91CA\u5668"><a class="header-anchor" href="#shebang-\u6307\u5B9A\u89E3\u91CA\u5668" aria-hidden="true">#</a> shebang(\u6307\u5B9A\u89E3\u91CA\u5668)</h3><ol><li>#! /usr/bin/bash</li><li>#!/ usr/bin/python</li><li>#! /user/evn</li></ol><h3 id="\u6CE8\u91CA"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h3><ol><li><h1 id="\u6CE8\u91CA-1"><a class="header-anchor" href="#\u6CE8\u91CA-1" aria-hidden="true">#</a> \u6CE8\u91CA</h1></li></ol><h3 id="\u6267\u884C\u811A\u672C\u7684\u65B9\u5F0F"><a class="header-anchor" href="#\u6267\u884C\u811A\u672C\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6267\u884C\u811A\u672C\u7684\u65B9\u5F0F</h3><ol><li>bash shell\uFF08\u63A8\u8350\uFF09</li><li>\u76F8\u5BF9/\u7EDD\u5BF9\u8DEF\u5F84\u6267\u884C\u811A\u672C\uFF0C\u9700\u8981\u6587\u4EF6\u542B\u6709x\u6743\u9650\u3001</li><li>source</li><li>sh &lt; <a href="http://script.sh" target="_blank" rel="noopener noreferrer">script.sh</a></li></ol><h3 id="shell\u4E0E\u8FD0\u7EF4"><a class="header-anchor" href="#shell\u4E0E\u8FD0\u7EF4" aria-hidden="true">#</a> shell\u4E0E\u8FD0\u7EF4</h3><ol><li>\u57FA\u7840\u547D\u4EE4</li><li>\u5B58\u50A8\u670D\u52A1</li><li>\u5B9A\u65F6\u4EFB\u52A1</li><li>Zabbix\u76D1\u63A7</li><li>\u865A\u62DF\u5316\u670D\u52A1</li><li>\u4E91\u8BA1\u7B97\u670D\u52A1</li><li>Linux\u7CFB\u7EDF\u670D\u52A1</li><li>Django\u670D\u52A1</li><li>Python\u670D\u52A1</li><li>Nginx\u670D\u52A1</li></ol><h3 id="bash"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> bash</h3><h4 id="\u57FA\u672C\u6982\u5FF5"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h4><ol><li>bash\u662F\u4E00\u4E2A\u547D\u4EE4\u5904\u7406\u5668\uFF0C\u8FD0\u884C\u5728\u6587\u672C\u7A97\u53E3\u4E2D\uFF0C\u5E76\u80FD\u6267\u884C\u7528\u6237\u76F4\u63A5\u8F93\u5165\u7684\u547D\u4EE4</li><li>bash\u8FD8\u80FD\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6linux\u547D\u4EE4\uFF0C\u79F0\u4E4B\u4E3A\u811A\u672C</li><li>bash\u652F\u6301\u901A\u914D\u7B26\u3001\u7BA1\u9053\u3001\u547D\u4EE4\u66FF\u6362\u3001\u6761\u4EF6\u5224\u65AD\u3001\u5FAA\u73AF\u7B49\u529F\u80FD</li></ol><h4 id="\u5386\u53F2\u8BB0\u5F55"><a class="header-anchor" href="#\u5386\u53F2\u8BB0\u5F55" aria-hidden="true">#</a> \u5386\u53F2\u8BB0\u5F55</h4><ol><li>echo $HISTSIZE</li><li>echo $HISTFILE</li><li>/root/.bash_history</li><li>history -c(clear)</li><li>history -r(reload-\u6062\u590D)</li><li>!!(last command-\u6267\u884C\u6700\u540E\u4E00\u6761\u547D\u4EE4)</li></ol><h4 id="\u7279\u6027\u6C47\u603B"><a class="header-anchor" href="#\u7279\u6027\u6C47\u603B" aria-hidden="true">#</a> \u7279\u6027\u6C47\u603B</h4><ol><li>\u6587\u4EF6\u8DEF\u5F84tab\u952E</li><li>\u547D\u4EE4\u8865\u5168</li><li>\u5FEB\u6377\u952Ectrl+ a,e,u,k,l</li><li>\u901A\u914D\u7B26</li><li>\u547D\u4EE4\u5386\u53F2</li><li>\u5386\u53F2\u522B\u540D</li><li>\u547D\u4EE4\u884C\u5C55\u5F00</li></ol><h4 id="\u53D8\u91CF\u542B\u4E49"><a class="header-anchor" href="#\u53D8\u91CF\u542B\u4E49" aria-hidden="true">#</a> \u53D8\u91CF\u542B\u4E49</h4><h5 id="\u53D8\u91CF\u547D\u540D\u89C4\u5219"><a class="header-anchor" href="#\u53D8\u91CF\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u53D8\u91CF\u547D\u540D\u89C4\u5219</h5><ol><li>\u4E2D\u95F4\u4E0D\u80FD\u6709\u7A7A\u683C\u3001</li><li>\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF</li><li>\u4E25\u683C\u547D\u540D\u533A\u5206\u5927\u5C0F\u5199</li></ol><h5 id="\u53D8\u91CF\u7684\u4F5C\u7528\u57DF"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u4F5C\u7528\u57DF</h5>',21);function r(s,d,t,o,n,c){return l(),a("div",null,[h])}i.render=r;export{_ as __pageData,i as default};