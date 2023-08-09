import React, {useEffect, useState} from 'react';
import './stylesheets/style.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState(['未完了', '未完了2'])
  const [completeTodos, setCompleteTodos] = useState(['完了','完了2'])
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  }
  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }
  const onClickDelete = (idx) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(idx, 1)
    setIncompleteTodos(newTodos)
  }
  return (
    <>
      <div className="input-area">
        <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {
            completeTodos.map((completeTodo) => {
              return (
                <div key={completeTodo} className='list-row'>
                  <li>{completeTodo}</li>
                  <button>戻す</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}