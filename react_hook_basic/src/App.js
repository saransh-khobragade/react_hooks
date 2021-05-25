import { useCallback, useState } from 'react'
import Title from './Title';
import Increment from './Increment'
import Increment2 from './Increment2'

const  App = () => {

  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)
  
  const inc1 = useCallback((count)=>{
    setCount1(prev => prev + count)         // This version will only change when setCount1/count1 changes
  },[setCount1])

  const inc2 = useCallback((count)=>{
    setCount2(prev => prev + count)         // This version will only change when setCount2/count12 changes
  },[setCount2])
  
    return (
    <div>
      <Title/>  {/* Will not change oncs render because no props changes*/}
      
      <Increment fire={inc1}/>   {/* Will not change if inc2 update its state count2 but setCount1 version not changed so no prop changed */}

      <Increment2 fire={inc2}/> {/* Will not change if inc1 update its state count1 but setCount2 version not changed so no prop changed */}

      Count1->{count1}
      <br/>
      Count2->{count2}
    </div>
  );
}

export default App;

//By using useCallback and react.memo() we can save re-render alot,because every state changes call for parent component to re-render and new versions
//of functions created so child also re-renders