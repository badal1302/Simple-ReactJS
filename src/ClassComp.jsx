import React, { Component } from 'react'

export class ClassComp extends Component {
  render() {
    return (
      <div>
        This is Class comp
        <h2>Welcome {this.props.name}</h2>
      </div>
    )
  }
}

export default ClassComp
