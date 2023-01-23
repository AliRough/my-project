import React, { Component } from 'react'

export default class NavUl extends Component {
  render() {
    return (
        <ul className={this.props.class}>
            {this.props.children}
        </ul>
    )
  }
}
