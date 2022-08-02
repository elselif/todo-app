import {useState} from 'react'

import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit' //uniq id için
import {addTodo}from '../redux/todos/todosSlice'


function Form() {

  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //yeniden yüklenme dursun diye 
  
    dispatch(addTodo({id:nanoid(),title,complated:false}))

    setTitle('');
  };



  return (
    <form onSubmit={handleSubmit}>
        <input className='new-todo' placeholder="what need to be done?" autoFocus value={title} onChange={(e) =>setTitle(e.target.value)}></input>
    </form>
  )
}

export default Form