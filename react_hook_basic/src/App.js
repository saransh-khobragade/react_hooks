import React ,{ useState } from 'react'

function expensiveCalculation(){
  let i=0
  for(i=0;i<100;i++){
    console.log(i)
  }
  return i
}
const  App = () => {
  
  const [count,setCount] = useState(()=>expensiveCalculation())   //it will run only one time when anything change happened in dom
  const [count1,setCount1] = useState(expensiveCalculation())   //it will print console for every change
  const [count3,setCount3] = useState(3)  //general use static value intialise
  
  return (
    <div>
      <button onClick={()=>setCount1(count1+1)}>+</button>
      {count1}
      <button onClick={()=>setCount(count+1)}>++</button>
      {count}
      {count3}
    </div>
  );
}

export default App;
