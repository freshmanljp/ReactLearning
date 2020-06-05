// react新特性Hooks的使用，让函数式组件也能使用state和其他react特性
// 两个常见的api，useState和useEffect
import React, { useState, useEffect } from 'react'
// 函数式组件引用变量都不用this
function App() {
    // useState是一个方法，返回一个数组，第一个是state，第二个是setState，下面是解构出来数组的操作
    const [count, setcount] = useState(0)
    // useEffect是一个方法，参数时回调函数，不管是组件挂载还是更新都会触发这个回调方法，类似DidMount和DidUpdate的结合
    useEffect(() => {
        console.log('渲染了一遍')
        document.title = `当前的数量为${count}`
    })
    return (
        <div>
            <p>当前数量为{count}</p>
            {/* 函数组件的setState方法和类组件的setState方法不同地方在于，这里的参数是新值即可 */}
            <button onClick={() => {setcount(count - 1)}}>-</button>
            <span>{count}</span>
            <button onClick={() => {setcount(count + 1)}}>+</button>
        </div>
    )
}

export default App
