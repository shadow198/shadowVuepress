## useEffect 规则

- 在每次 render 之后执行
- 接受第二个参数来控制跳过执行，下次 render 后如果指定的值没有变化就不会执行
- useEffect 是在 render 之后浏览器已经渲染结束才执行

## 参数的规则

- 它是可选的
- 类型是一个数组
- 它的值应该是 props 或 state

## 不同值的参数

- 不传参数
- 空数组
- 一个值的数组
- 多个值的数组

### 不传参数



```jsx
useEffect(() => {
    console.log('useEffect with no dependency')
})
```

如上所示，默认的行为，会每次 render 后都执行

### 空数组



```jsx
useEffect(() => {
    console.log('useEffect with empty dependency')
}, [])
```

传入第二个参数，每次 render 后比较数组的值没变化，不会在执行，等同于类组件中的 componentDidMount

### 一个值的数组



```jsx
useEffect(() => {
    console.log('useEffect widh specify dependency')
}, [id])
```

传入第二个参数，只有一个值，比较该值有变化就执行

### 多个值的数组



```jsx
useEffect(() => {
    console.log('useEffect widh specify dependency')
}, [id, name])
```

传入第二个参数，有2个值的数组，会比较每一个值，有一个不相等就执行

## 一个例子



```jsx
function Detail () {
    const [ name, setName ] = useState()

    useEffect(() => {
        function onLoad(data) {
            setName(data.name)
        }
        EventCenter.on('load', onLoad)
        
        return (() => {
            EventCenter.off('load', onLoad)
        })
    }, [])

    return(
        <div>{name}</div>
    )
}
```



```jsx
// 示例二
function Goods ({ id }) {
    const [ name, setName ] = useState()

    useEffect(() => {
        fetchApi(id).then(data => setName(data.name))
    }, [])

    return(
        <div>{name}</div>
    )
}
```

