import React from 'react'
import ChildComponent from './ChildComp_Bidirectional'
const ParentComponent = () => {
   
    const handleClick=()=>{
     alert('alert from child')
    };

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  )
}

export default ParentComponent
