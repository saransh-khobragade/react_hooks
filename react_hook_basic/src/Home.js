import React,{useContext} from "react"
import context from './Context'


const  Home = () => {

const {globalState:user} = useContext(context)

  return (
    <div>
        Hello {user.name}
    </div>
  );
}

export default Home;
