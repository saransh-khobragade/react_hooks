import {useRef} from 'react'

const  App = () => {
  
  const temp = useRef(1)
  
  console.log(temp.current)

  return (
    <div>
      <input type="input" ref={temp}/>1
      <input type="input"/>2
      <button onClick={()=>{temp.current.focus()}}>Focus on 1</button>

    </div>
  );
}

export default App;