import React, { Component } from 'react'

// import {TodoHelper} from './components'
import {TodoInput,TodoHelper,TodoList,Like} from './components'


  


export default class App extends Component {
  // state ={
  //   help:'今天星期一'
  // }
  constructor() {
    super()
    this.state = {
      help:'今天星期三',
      article:'<div>啊哈哈哈哈哈<i>我是啊哈哈</i></div>',
      todos:[
        {
          id:1,
          name:"吃饭",
          isHaved:true,
          who:'lala'
        },
        {
          id:2,
          name:"睡觉",
          isHaved:false,
          who:'guan'
        },
      ],
      inValue:''
    }
  }
  oninputChange =(id)=>{
    console.log('jkdjkfjkd',id);
   
  }

  
  toAdd = (title) =>{
    // 这样写出错了，3不是一个数组，因为push返回的是一个长度
    // this.setState({
    //   todos:this.state.todos.push({
    //     id:Math.random(),
    //     name:title,
    //     isHaved:false
    //   })
    // 1.这个方法是正确的
    // this.setState({
    //     todos:this.state.todos.concat({
    //       id:1+this.state.todos.length,
    //       name:title,
    //       isHaved:false
    //     })
    // })
    // 2.这个方法也是正确的
    // const newTodos = this.state.todos.slice();
    const newTodos = [...this.state.todos];
    newTodos.push({
      id:1+this.state.todos.length,
      name:title,
      isHaved:true
    })
    this.setState({
      todos:newTodos
    })
  }
  render() {
    // console.log(this,'-----');
    return (
      // <Fragment>
      //   <h1>我是关冰冰时</h1> 
      //   <TodoHelper/>
      //   <TodoInput/>
      //   <TodoList/> 
      // </Fragment>
      
      // 当前这里是可以为空标签的呢
    <>
      {/* map */}
      {/* {this.state.todos.map( todo=> {
        return <div key={todo.id}>{todo.name}</div>
        }
      )} */}
      {/* 带有标签 */}
      <div dangerouslySetInnerHTML={{__html:this.state.article}}></div>
      {/* {this.state.article} */}
      <h1>我是关冰冰时</h1> 
      <TodoHelper >
      {this.state.help}
      </TodoHelper>
      <TodoInput add="奥a" toInput={this.toAdd}  x={1} y={2}/>
      <TodoList todos={this.state.todos} oninputsChange={this.oninputChange} /> 
      <hr/>
    <h1>
      <button>
        <Like/>
      </button>
    </h1>
    </>
    )
  }
}
