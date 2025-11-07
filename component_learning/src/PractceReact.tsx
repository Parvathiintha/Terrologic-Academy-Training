// // import { time } from "console";
// // import React from "react";
// // // const Welcome = () => {
// // //   return (
// // //     <>
// // //       <welcome>hello from is react</welcome>
// // //     </>
// // //   );
// // // };
// // // export  default Welcome

// // //  --------------------------------------------------------------------

// // // Create a UserCard component that takes name and age as props and displays them

// // // type CardComponentprops = {
// // //   name: string;
// // //   age: number;
// // // };

// // // function CardComponent(props: CardComponentprops) {
// // //   return (
// // //     <div>
// // //       <p>Name:{props.name}props.name</p>
// // //       <p>age:{props.age}</p>
// // //     </div>
// // //   );
// // // }
// // // export default CardComponent;

// // // Build a Greeting component that shows
// // //  “Good Morning” if the time is before 12  “Good Evening” otherwise



// // type IProps = {
// //   name: string;
// // };

// // const Greeting = (props: IProps) => {
// //   const { name } = props;
// //   const currentHour = new Date().getHours();


// // //   if (currentHour < 12) {
// // //     message = "Good Morning 🌅";
// // //   } else if (currentHour < 18) {
// // //     message = "Good Afternoon ☀️";
// // //   } else {
// // //     message = "Good Night 🌙";
// // //   }

// // const message=currentHour<12 ?"good morning":"goodafternoon"

// //   return (
// //     <div><p>
// //         {message}, {name}!
// //       </p>
// //     </div>
// //   );
// // };

// // export default Greeting;


// // Create a Button component that displays a custom label passed via pro"
// // import {useState} from 'react'
// // function ObjectDestructing(){
// //     const [set,setState]=useState()
// //      function handleChange(event:any){
// //         setState(event.target.value)
// //      }
// //      return(
// //      <div>
// //         <button onClick={handleChange}>Click Me</button>
// //         <p>Name:{set}</p>
// //      </div>)
// // }
// // export default ObjectDestructing
// import React from "react";
// import ReactDOM from "react-dom/client";
// type  Iprops={
//     imgSrc:string,
//     altText:string
// }

// function ProfilePic({ imgSrc, altText }:Iprops) {
//   return <img src={imgSrc} alt={altText} width="200" height="200" />;
// }

// export default ProfilePic;
import React from "react";

function ProductList() {
  const products = ["Laptop", "Mobile", "Headphones"];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
