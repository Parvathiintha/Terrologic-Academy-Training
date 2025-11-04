import React from 'react'

const WelcomeMessage = (props:any) => {
  
    if(props.isLoggedIn){
        return <h1>welcomeback</h1>
    }
    return <h1>please login</h1>
}
  
   
export default WelcomeMessage
