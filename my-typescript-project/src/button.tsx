import React from 'react'
import './button.css'



const Button = (props: {name: string, age:number, phoneNo:any, Graduate:string} )=> {
    const {name,age,Graduate,phoneNo}=props;
  return (
    <div>
      
      
      <section>
      <p className="tags">name:{name}</p> 
      <p className="tags">age:{age}</p> 
      <p className="tags">Graduate:{Graduate}</p> 
      <p className="tags">phoneNo: {phoneNo}</p>
      </section>
    </div>

  )
}

export default Button
