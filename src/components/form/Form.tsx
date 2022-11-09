import React, { useState } from 'react'
import { IToDo } from '../../models/IToDo'
import { observer } from 'mobx-react-lite'
import toDoStore from '../../store/toDoStore'

const Form = () => {
  const [todo, setTodo] = useState<IToDo>({
    id: 0,
    userId: 1,
    title: '',
    completed: false,
  })

  const addToDo = () => {
    if (todo.title.trim()) {
      toDoStore.addTodo({ ...todo, id: new Date().getTime() })
      setTodo({ ...todo, title: '' })
    }
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setTodo({ ...todo, title: value })
  }

  const onFormSubmitAddToDo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addToDo()
  }

  const onInputBlurAddToDO = () => {
    addToDo()
  }

  return (
    <form className='todo__form' onSubmit={onFormSubmitAddToDo}>
      <input
        className='todo__form-input'
        type='text'
        placeholder="Новая заметка"
        value={todo.title}
        onChange={onChangeInput}
        onBlur={onInputBlurAddToDO}
      />
    </form>
  )
}

export default observer(Form)
