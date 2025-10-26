import React from 'react'

const ButtonCheck = () => {
    const handleClick =()=>{
        alert("button clicked")
    }
  return (

    <div>
        <button onClick ={handleClick}>clickme</button>
      
    </div>
  )
}

export default ButtonCheck
