import React, {useEffect, useState} from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  )
}