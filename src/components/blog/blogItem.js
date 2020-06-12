import React, { Component } from 'react'

export default class blogItem extends Component {
  render() {
    return (
      <li>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
