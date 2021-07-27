# 常用代码片段

## 清除浮动
  ``` css
    .clear {
      clear: both;
    }
  ```
  ``` css 
  .news {
    background-color: gray;
    border: solid 1px black;
    overflow: hidden;
    *zoom: 1;
  }
  ```
  ``` css
  .clearfix:after{
    content: "020"; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
  }
  .clearfix {
    /* 触发 hasLayout */ 
    zoom: 1; 
  }
  ```
## 文本截断
  ``` css
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  ```

## 居中

``` css
  .center { margin: 0 auto; };
  .center { text-align: center };
  .center { display: flex; justify-content: center };
  .center { display: grid; justify-content: center };
```




