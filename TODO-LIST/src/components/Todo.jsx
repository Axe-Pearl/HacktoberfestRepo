import React, { useState } from 'react'



const Todo = ({ todo,updateTodo,deleteTodo,moveUp,moveDown,total,index}) => {

const [update, setUpdate] = useState("");

const handleSubmit = () => {
   updateTodo(todo.id, update)
}


    return (
        <div className='todo'>
            <p className='text'>{todo.text}</p>
           
            <input className='inp' type="text" placeholder='text' value={ update } onChange={(e) => setUpdate( e.target.value)} />

            <button className="btn" onClick={handleSubmit}>Add</button>
            <div className='utils'>
                <div className='go-up' style={{borderBottomColor:index === 0 ? 'grey' : '#1DA1F2'}} onClick={() => moveUp(todo.id)}></div>
                <div className='go-down' style={{borderTopColor:index === total - 1 ? 'grey' : '#1DA1F2'}} onClick={() => moveDown(todo.id)}></div>
                <div className='remove'  onClick={() => deleteTodo(todo.id)}></div>
            </div>
        </div>
    )
}

export default Todo
