import React, {useEffect, useState} from 'react';
import './stylesheets/style.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
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
  const onClickComplete = (idx) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(idx, 1)
    setIncompleteTodos(newIncompleteTodos)
    const newCompleteTodos = [...completeTodos, incompleteTodos[idx]]
    setCompleteTodos(newCompleteTodos)
  }
  const onClickBack = (idx) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(idx, 1)

    const newIncompleteTodos = [...incompleteTodos, completeTodos[idx]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
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
                <button onClick={() => onClickComplete(index)}>完了</button>
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
            completeTodos.map((completeTodo, index) => {
              return (
                <div key={completeTodo} className='list-row'>
                  <li>{completeTodo}</li>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}