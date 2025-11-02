
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonNavigation = () => {
    const navigate = useNavigate()
    const handleSubmit = () =>{
        navigate('/about')
    }
  return (
    <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default ButtonNavigation