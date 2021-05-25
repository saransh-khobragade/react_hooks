import { useReducer } from 'react'

function reducer(state,actions){
  switch(actions.type){
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    default : return state;
  }
}

const intialState = 0

const  App = () => {

  const [count,dispatch] = useReducer(reducer,intialState)
  //dispatch will take actions and state will mutate by reducer functions

  return (
    <div>
      Count:{count}
      <button onClick={()=>dispatch({type:'inc'})}>INC</button>
      <button onClick={()=>dispatch({type:'dec'})}>DEC</button>
    </div>
  );
}

export default App;
