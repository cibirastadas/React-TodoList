import React from 'react'
import classes from "./App.module.css"
import TodoList from "./container/TodoList"
import Caption from "./components/Caption/Caption"
function App() {
  return (

    <div className={classes.rootContainer}>
      <Caption text="Mano užduočių sarašas"/>
      <TodoList />
    </div>
  )
}

export default App;
