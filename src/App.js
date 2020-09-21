import React , { useReducer, useState, Fragment } from 'react'
import {reducer, initialState} from './reducer/reducer'
import AddToDoForm from './components/AddToDoForm'
import ToDo from './components/ToDo'


export default function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  const[text,setText] = useState()
  
  const onSubmit = e => {
    e.preventDefault()
    dispatch({type:'ADD_TODO',text})
    setText('')
  }

  const onChange = e => {
    setText(e.target.value)
  }
  
  return (
    <Fragment>
      <AddToDoForm
      onSubmit={onSubmit}
      onChange={onChange}
      text={text}
      dispatch={dispatch}
      />
      <ToDo 
      todos={state.todos}
      dispatch={dispatch}
      />
      
    </Fragment>
  )
}
