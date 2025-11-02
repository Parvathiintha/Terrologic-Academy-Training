import {useNavigate}from 'react-router-dom'
import React from 'react'

const ButtonNavigation = () => {
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate('/about')
    }
  return (
   <form onSubmit={handleSubmit}>
    <button type="submit">submit</button>
   </form>
  )
}

export default ButtonNavigation
