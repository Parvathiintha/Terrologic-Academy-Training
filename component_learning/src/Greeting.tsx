import React from 'react'

const Greeting = (props:any) => {
  return (
    <div>
      {props.isLoggedIn?(
        props.isAuthorized? <h1>You are authorized</h1>: <h1>You are not allowed</h1>
      ):(
      <h1>please login</h1>
      )}
    </div>
  )
}

export default Greeting
