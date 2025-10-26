import React from "react";

const ArrayTraversal = () => {
//   const items: undefined | any[] = [];
 const items: undefined | any[] = ['Apple','Banana','Cherry'];
  return (
    <div>
      <ol>
        {items?.map((val) => (
          <li>{val}</li>
        ))}
      </ol>
    </div>
  );
};

export default ArrayTraversal;
