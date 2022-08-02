import React from 'react'
import { todosSlice } from '../redux/todos/todosSlice';
import {useSelector , useDispatch} from 'react-redux';

import {toggle} from '../redux/todos/todosSlice' 

function TodoList() {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.todos.items)

  return (
    <ul className="todo-list">
        
        
        {
            items.map((item) => 
            <li key={item.id} className={item.complated ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox"  onChange={() => dispatch(toggle({id:item.id}))}/>
                <label>{item.title}</label>
                <button className="destroy"></button>
            </div>
        </li>)
        }
    </ul>
  )
}

export default TodoList