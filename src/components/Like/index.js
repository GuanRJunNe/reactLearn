import React, { Component } from 'react'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      isLike:false
    }
  }
  // react要修改数据，就要使用setState方法，setState方法可以有两个参数
  // 第一个参数有两种情况，第一种是一个对象
  clickLike=()=>{
    // this.setState({
    //   isLike:!this.state.isLike
    // })
    // 第二种是一个方法
    this.setState((prevState)=>{
      console.log(prevState,1);
      console.log(this.state.isLike,'内部的state')
      return {
        isLike:!prevState.isLike
      }
    //  由于setState是异步的， 如果想要获取到最新的state,应该在这个回调里获取 
    },() =>{
      console.log(this.state.isLike);
    })
    console.log(this.state.isLike,'外部的state')
  }
  
  render() {
    return (
      <div  onClick={this.clickLike}>
        {this.state.isLike?'我爱你':'不爱你'}
      </div>
    )
  }
}
