import React from "react";

const  Title = () => {
  console.log('Title')
  return (
    <div>
      Title
    </div>
  );
}

export default React.memo(Title); //will only changes when props changes