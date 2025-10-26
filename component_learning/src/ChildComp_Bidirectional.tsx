import React from 'react'

const ChildComponent = (props:any) => {
  return (
    <div>
      <button onClick={props.onButtonClick}>Click here to alert</button>
    </div>
  )
}

export default ChildComponent
