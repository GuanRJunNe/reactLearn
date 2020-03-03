import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default function TodoHelper (props){
    return (
      <div>
        <h1>{props.help}</h1>
        <h2>{props.children}</h2>
      </div>
    )
  
}


TodoHelper.propTypes = {
  help:PropTypes.string
}
TodoHelper.defaultProps = {
  help:'我是你大爷'
}