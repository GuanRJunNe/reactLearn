import React, { Component } from 'react'
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
  render() {
    console.log(this.props);
    return (
      <div>
        <input />{this.props.x*this.props.y}
        <button>{this.props.add}</button>
      </div>
    )
  }
}

