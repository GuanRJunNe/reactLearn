//react里面通过ref获取组件和dom元素，要使用ref之前必须先调用React.createRef方法来创建一个ref 
import React, { Component,createRef} from 'react'
import PropTypes from 'prop-types';

export default class TodoInput extends Component {

  static propTypes = {
    x:PropTypes.number,
    y:PropTypes.number
  }
  static defaultProps = {
    x:2,
    y:3
  }
  constructor() {
    super()
    this.state = {
      inputValue:''
    }
    // 在constructor里创建ref
    this.inputDom = createRef()
    // this.handlenBtClickCopy = this.handlenBtClick.bind(this,1234);
  }
  handelClick = (e) => {
    this.setState({
      inputValue:e.currentTarget.value
    })
  }
  handlenBtClick = () =>{
    // console.log(this.inputDom);
    if(this.inputDom.inputValue ===''){
      return
    }
    // console.log(this.inputDom,'---');
      this.props.toInput(this.state.inputValue)
      this.setState({
        inputValue:''
      },() =>{
        this.inputDom.current.focus();
      })
  }
  handleKeyUp = (e) =>{
    console.log(e.keyCode);
    if(e.keyCode === 13){
      this.handlenBtClick() 
    }
  } 
  render() {
    // console.log(this.props);
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handelClick}
        onKeyUp={this.handleKeyUp}  ref={this.inputDom}/>{this.props.x*this.props.y}
        <button onClick={this.handlenBtClick}>{this.props.add}</button>
      </div>
    )
  }
}

