import React from 'react'

const FunctionalComp = (props) => {
  return (
    <div>This is functional comp
        <h3>My name is {props.name1} and I am from {props.loc}</h3>
    </div>
    
  )
}

export default FunctionalComp