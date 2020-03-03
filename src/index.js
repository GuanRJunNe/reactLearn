// import React  from 'react'
// import ReactDom from 'react-dom'

// // 创建了一个简单的react元素
// // const app = <h1>welcome React啊哈哈哈</h1>

// //  箭头函数
// // const createApp = (props) =>{
// //     return  (
// //     <div>
// //         {/* 书写注释的样式 */}
// //         {/* 只要是在jsx中输入一段js代码  就要使用{}  */}
// //         <h1>welcome React啊哈哈哈{props.title}</h1>
// //         <h1>welcome React啊哈哈哈</h1>
// //         <h1>welcome React啊哈哈哈</h1>
// //         <h1>welcome React啊哈哈哈</h1>
// //     </div>
// //     )
// // }
// // const  app = createApp({
// //     title:'我是关冰冰'
// // })

// ---------------------------箭头函数-------------------------
// //☆ 创建组件的第一种方式：使用箭头函数，但是这个名字要大写开始
// const App = (props) =>{
//     return  (
//     <div>
//         {/* 书写注释的样式 */}
//         {/* 只要是在jsx中输入一段js代码  就要使用{}  */}
//         <h1>welcome React啊哈哈哈{props.title}</h1>
//         <h1>welcome React啊哈哈哈</h1>
//         <h1>welcome React啊哈哈哈</h1>
//         <h1>welcome React啊哈哈哈</h1>
//     </div>
//     )
// }
// ReactDom.render(
//     <App title="我是呵呵呵"/>,
//     document.querySelector('#root')
// )


// -----------------------使用类和JSX-------------------------
// import  React,{Component} from 'react'
// import { render } from 'react-dom'
// // 定义组件的第二种方式  使用类继承react.component
//     // 这里是使用类的形式创建的组件，这是jsx的语法，但不是合法的js代码
// class App extends Component {
//     render (){
//         console.log(this.props);
//         return (
//             <div>
//             <h1>类组件!!s</h1>
//             <h1>哈哈哈哈</h1>
//             <p>{this.props.desc}</p>
//             </div>
//         )
//     }
// }
// 所以说react在真正的渲染的时候会把上面的代码编译为下面这个样子来运行，下面的代码就是合法的js代码
    // React.createElement 是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的
    // 第一个可以理解为标签名
    // 第二个可以理解为标签的属性
    // 剩下的就可以写更多的元素
    // React.createElement(type,[props],[...children])
// class App extends Component {
//     render() {
//         return {
//             React.createElement(
//                 'div',
//                 {
//                     className:'app',
//                     id:'appRoot'
//                 },
//                 React.createElement(
//                     'h1',
//                     {
//                         classname:'h1s'
//                     },
//                     '我是大标题'
//                 ),
                    // React.createElement(
                    //     'h1',
                    //     null,
                    //     '类组件是继承React.Component的'
                    // )
//             )
//         }
//     }
// }
// 类组件渲染的原理
// const app  = new App({
//     desc:'我是后端'
// }).render()

// render是react-dom提供的一个方法，这个方法通常只会使用一次
//     render(
//     <App/>,
//     document.querySelector('#root')
// )


// ----------------------style------------------------------
import React,{ Component } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components';
import './index.css'

const Title = styled.h4`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`;
// 1.内联样式
// 2.引入外部样式
// 3.styled-components样式
// 4.classnames样式
class App extends Component {
    render() {
        const style = {color:'pink'}
        return (
            <div>
                <h1  style={{backgroundColor:'pink'}}>这是内联样式</h1>
                <h1  style={style}>这是内联样式</h1>
                <h2 className='ls'>这是外联样式</h2>
                <h3 className={classNames('foo,bar')}>classnames</h3>
                {/* 下面是styled的使用方式 */}
                <Title>关关</Title>
            </div>
        )
    }
}

render(
    <App/>,
    document.querySelector('#root')
)
