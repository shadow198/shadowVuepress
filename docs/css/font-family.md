# css字体研究

## 字体类型

### serif 衬线字体族

特点：

*   具有修饰过的笔画，向外展开的或者尖细的末端，或者是带有实际衬线的末端

*   一笔一划末端（两头）都带点变化装饰，比如宋体笔画末端有毛笔字的感觉

*   文字末端有差异，在小字号下仍然容易辨认。但在大字号下笔画装饰部分可能会显得_模糊或带有锯齿_

示例：

*   Times New Roman、MS Georgia

*   宋体、仿宋

衍生：

*   petit-serif 小衬线字体族

    末端变化不明显，可以当做无衬线

*   slab-serif 雕版衬线字体族

    末端变化非常明显

### sans-serif 无衬线字体族

sans-前缀是法语，发音为/san/，意为“无”

特点：

*   具有笔画清晰的末端–带有一点或者没有向外展开的，交错笔画，或者其它装饰

*   与“衬线字体”相比，如果字号比较小，看起来就会有些_难以分辨_，尤其段落阅读时容易串行

示例：

*   MS Trebuchet、MS Arial、MS Verdana

*   黑体、幼圆、隶书、楷体

### cursive 手写字体族

特点：

*   像手写的一样

示例：

*   Caflisch Script、Adobe Poetica

*   徐静蕾手写体、迷你简黄草、华文行草、少女体

### fantasy 梦幻字体族

特点：

*   艺术字，主要用于图片，页面上用的少

示例：

*   WingDings、WingDings 2、WingDings 3、Symbol

*   萝卜体

### monospace 等宽字体族

特点：

*   每个字形都等宽，主要用于英文，中文方块字本来就等宽

示例：

*   Courier、MS Courier New、Prestige

*   大多数中文字体

## 使用原则

常识：

*   一个页面上不要用3，4种甚至更多字体

*   如非必要，不要在句中改变字体

*   sans-serif用于在线媒体，_serif用于打印设备_

*   monospace用于打字机和代码

*   _小字号场景不要用sans-serif_，衬线字体更容易辨认

最佳实践：

*   sans-serif是页面首选，无衬线

    因为在屏幕显示设备上，衬线会让文字变得难以辨认

*   serif不适合在线阅读，但打印效果很好，适用于页面打印版

    衬线字体在打印的场景更容易阅读，让人更容易清楚区分不同字母。打印机对分辨率的要求更精细（355ppi），高分辨率下细节显示得很清楚，而不会像屏幕显示一样出现模糊

*   monospace用作代码示例

    每个字符等宽，在页面上占据相同的空间，打字机就用这种字体

*   正文不要用fantasy和cursive

    可以用在图片或者标题栏里

- css属性 **ont-variant-east-asian** 可以选择宽度策略

## 设置字体

  - font-family 属性设置文本的字体系列。

  - font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。

  - 注意: 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。

  ``` css
    p{font-family:"Times New Roman", Times, serif;}
  ```

## 中文字体
- 宋体 SimSun

- 黑体 SimHei

- 微软雅黑 Microsoft YaHei

- 微软正黑体 Microsoft JhengHei

- 新宋体 NSimSun

- 新细明体 PMingLiU

- 细明体 MingLiU

- 标楷体 DFKai-SB

- 仿宋 FangSong

- 楷体 KaiTi

- 仿宋_GB2312 FangSong_GB2312

- 楷体_GB2312 KaiTi_GB2312


## 参考文献

- [Serif 和 Sans-serif字体的区别](https://kb.cnblogs.com/page/192018/)