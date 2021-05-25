import React,{useContext}  from "react"
import context from './Context'

const  About = () => {

  const {globalState:user} = useContext(context)

  return (
    <div>
        About user : {user.name}
    </div>
  );
}

export default About;
