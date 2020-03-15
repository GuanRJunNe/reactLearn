import React, { Component } from 'react'
const  noop = () =>{}
export default class TodoItem extends Component {
  
  handleCheckboxChange = () => {
    const  {
      id,
      oninputsChange =noop
    }
      =this.props;
    oninputsChange && oninputsChange(id);
  }
  render() {
    const {
      isHaved,
      name
    } = this.props
    return (
      <li>
        <input
          checked={isHaved}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        <span>{name} {isHaved ? '已完成' : '未完成'}</span>
      </li>
    )
  }
}