import React, { Component } from 'react'
import './NavLi.css'

export default class NavLi extends Component {

  render() {
    if(!this.props.notif||this.props.notif===0){
        return null
    }
    return (
        <li className={this.props.class}>
        <a className="nav-link" href="#" data-bs-toggle={this.props.dataBsToggle}>{this.props.desc} </a>
        {this.props.children}
        <span className='notif'>{this.props.notif}</span>
      </li>
    )
  }
}
