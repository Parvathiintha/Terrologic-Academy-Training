import React from 'react'

const WelcomeMessage = (props:any) => {
    const isLoggedIn =props.LoggedIn;
    if(isLoggedIn){
        return <h1>welcomeback</h1>
    }
    return <h1>please login</h1>
}
  
   
export default WelcomeMessage
