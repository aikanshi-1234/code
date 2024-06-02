import React, { useState } from "react";
import Login from "./pages/Login";
import Todo from "./pages/todo";
import footer from './components/footer'
const App = () => {
const [loggedIn , setLoggedIn] = useState(false);

  return (
    <>
      {
        loggedIn ? <Todo/> : <Login login = {() => setLoggedIn(true)}/>
      }
      <footer/>
    </>
  )
}

export default App;
