import React, { Component } from 'react'

// import {TodoHelper} from './components'
import {TodoInput,TodoHelper} from './components'
import {TodoList} from './components'

  


export default class App extends Component {
  render() {
    return (
      // <Fragment>
      //   <h1>我是关冰冰时</h1> 
      //   <TodoHelper/>
      //   <TodoInput/>
      //   <TodoList/> 
      // </Fragment>
      
      // 当前这里是可以为空标签的呢
    <>
      <h1>我是关冰冰时</h1> 
      <TodoHelper help="待办助手">
        <b>我是待办助手的baby</b>
      </TodoHelper>
      <TodoInput add="奥a"  x={1} y={2}/>
      <TodoList/> 
    </>
    )
  }
}
