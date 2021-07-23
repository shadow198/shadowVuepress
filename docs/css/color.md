# CSS 颜色

## 颜色色值表示的几种类型

1. 十六进制颜色(#ff0000)
2. 带透明度的十六进制颜色(#ff000080)
3. RGB 颜色(rgb(red, green, blue))
4. RGBA 颜色(rgba(red, green, blue, alpha))
5. HSL 颜色
   - HSL 指的是色相（hue）、饱和度（saturation）和亮度（lightness)
   - hsl(hue, saturation, lightness)
   - H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
   - S：Saturation(饱和度)。取值为：0.0% - 100.0%
   - L：Lightness(亮度)。取值为：0.0% - 100.0%
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

## 相关概念
### 色相环
   ![12色相环](https://pic1.zhimg.com/80/v2-0b2f8c8e1d50590125bc19930667954c_720w.jpg)
   ![24色相环](https://pic4.zhimg.com/80/v2-2922ec1c92cc3e95fed8b5b593b04f5f_720w.jpg)

### 互补色

> 互补色 - 指在色相环上角度为180°的色彩，比如我们最常说到的3组互补色：红和绿、蓝和橙、黄和紫。

### 对比色

> 没有互补色那么严格，指的是在色相环上角度在120° - 180°之间的色彩，并且理论上来说，互补色应该也是包含于对比色之内的。比如：粉色和绿色就是对比色。

### 同类色

> 同类，必然是非常相近的颜色，一般在色相环上为30°之间的色彩，比如柠檬黄与中黄，就是同类色。

### 近似色

> 近似色相较于同类色，在色相环上的角度范围更大一些，一般在60°之内，也就是说，同类色属于近似色。我们可以举一个是近似色但不是同类色的例子：柠檬黄与橘黄。



## 相关工具

   - [https://www.colorgg.com/ 颜色信息查询](https://www.colorgg.com/)


