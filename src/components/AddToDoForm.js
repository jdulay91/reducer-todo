import React from 'react'



export default function addTodoForm(props) {
    const{ onSubmit, onChange, text, dispatch } = props
    return (
        <form onSubmit={onSubmit}>
            <input
            value={text}
            onChange={onChange}
            />
            <button>Add toDo</button>
            <button onClick={()=>dispatch({type:'CLEAR_TODO'})}>Clear Todo</button>
        </form>

    )
}
