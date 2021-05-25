import React from "react";

const  Increment = ({fire}) => {
  console.log('Increment')
  return (
    <div>
      <button onClick={()=>{fire(5)}}>Increment</button>
    </div>
  );
}

export default React.memo(Increment); //will only changes when props changes