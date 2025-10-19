import React from 'react'
import TestCmponent from './TestCmponent'
const DemoComponent = () => {
  return (
    <div>
      <input type="text" placeholder='Enter your name' />
      <button>submit</button>
      <TestCmponent/>
    </div>
  )
}



const Component = () => {
  return (
    <div>
      <p>this another demo within another component </p>
    </div>
  )
}

export default{ Component ,DemoComponent }





