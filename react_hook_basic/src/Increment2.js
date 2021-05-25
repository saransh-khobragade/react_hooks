import React from "react";

const  Increment2 = ({fire}) => {
  console.log('Increment2')
  return (
    <div>
      <button onClick={()=>{fire(5)}}>Increment2</button>
    </div>
  );
}

export default React.memo(Increment2); //will only changes when props changes