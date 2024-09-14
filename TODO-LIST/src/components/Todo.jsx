import React, { useState } from 'react'

const Todo = ({ todo,deleteTodo,moveUp,moveDown,total,index , editTitle}) => {
    const [text , setText] = useState("");
    
    return (
        <div className='todo'>
            <p className='text'>{todo.text}</p>
                <div className='utils'>
                <div className='parentInBt'>
                    <input className = 'input' type="text" placeholder='text' onChange={(e) =>{
                           setText(e.target.value);
                      }}/>
                    <button className = 'editBtn' onClick={() =>{
                        editTitle(text , todo.id);
                    }}>Edit title</button>
                </div>
                
                <div className='go-up' style={{borderBottomColor:index === 0 ? 'grey' : '#1DA1F2'}} onClick={() => moveUp(todo.id)}></div>
                <div className='go-down' style={{borderTopColor:index === total - 1 ? 'grey' : '#1DA1F2'}} onClick={() => moveDown(todo.id)}></div>
                <div className='remove'  onClick={() => deleteTodo(todo.id)}></div>
            </div>
        </div>
    )
}

export default Todo
