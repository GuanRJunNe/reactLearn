import React, { Component } from 'react'
import TodoItem  from './TodoItem.js'
import PropTypes from 'prop-types'
export default class TodoList extends Component {
  static propTypes = {
    todos:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      isHaved:PropTypes.bool.isRequired,
    })).isRequired,
    oninputsChange:PropTypes.func
  }
  render() {
     console.log(this.props);
     const {oninputsChange} =this.props
    return (
      <div>
        {this.props.todos.map(todo => {
          return  (
            // <TodoItem key={todo.id} id={todo.id} name={todo.name} isHaved={todo.isHaved}/>
            <TodoItem  key={todo.id} {...todo}  oninputsChange={oninputsChange} />
          )
        })}
      </div>
    )
  }
}
