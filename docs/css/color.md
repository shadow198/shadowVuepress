# CSS 颜色

## 颜色色值表示的几种类型

1. 十六进制颜色(#ff0000)
2. 带透明度的十六进制颜色(#ff000080)
3. RGB 颜色(rgb(red, green, blue))
4. RGBA 颜色(rgba(red, green, blue, alpha))
5. HSL 颜色
   - HSL 指的是色相（hue）、饱和度（saturation）和亮度（lightness)
   - hsl(hue, saturation, lightness)
6. HSLA 颜色 (hsla(hue, saturation, lightness, alpha)
7. 预定义/跨浏览器的颜色名称 (background-color: blue)
   1. [颜色对照表](https://eeweb.top/tool/color_name.html)
8. 使用 currentcolor 关键字
   ```css
    #myDIV {
      color: blue; /* 蓝色文本色 */
      border: 10px solid currentcolor; /* 蓝色边框色 */
    }
   ```


