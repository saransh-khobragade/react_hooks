import {useRef,useState,useLayoutEffect,useEffect} from 'react'

const  App = () => {
  
  const myRef = useRef()
  const [ data,setData ] = useState({})
  const [count,setCount] = useState(1)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/'+count)
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
  },[count])//changes after count changes
  
  useLayoutEffect(()=>{
    console.log(JSON.stringify(myRef.current.getBoundingClientRect().width))  //width changes
  },[data]) //react after dom get painted and watched data
  
  return (
    <>
      <div style={{ display:"flex"}}>
        <div ref={myRef}>{JSON.stringify(data)}</div>
      </div>
      <button onClick={()=>setCount(count+1)}>change</button>
    </>
  );
}

export default App;