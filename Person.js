import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
  render() {
    return (
      <div onClick={this.props.remove}>
        <i >{this.props.index}</i>
        <i>Name: {this.props.name}</i>
        <i>Age: {this.props.age}</i>
      
      </div>
    )
  }
}
