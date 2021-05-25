import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import context from './Context'

const App = () => {

  const [globalState,setGlobalState] = useState({name:"ABC"})

  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <context.Provider value={{globalState,setGlobalState}}>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} /> 
      </context.Provider>

    </Router>
  );
}

export default App;
