import React, { useState } from 'react'
import { IToDo } from '../../models/IToDo'
import toDoStore from '../../store/toDoStore'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { observer } from 'mobx-react-lite'

const Form = () => {
  const { width, height } = useWindowSize()
  const [todo, setTodo] = useState<IToDo>({
    id: 0,
    userId: 1,
    title: '',
    completed: false,
  })

  const [isShowConfetti, setIsShowConfetti] = useState(false)

  const addToDo = () => {
    if (todo.title.trim()) {
      toDoStore.addTodo({ ...todo, id: new Date().getTime() })
      setTodo({ ...todo, title: '' })
      setIsShowConfetti(true)
      setTimeout(() => setIsShowConfetti(false), 2500)
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
    <>
      {isShowConfetti && <ReactConfetti
        width={width} height={height}
        numberOfPieces={200}
        gravity={0.5}
      />}
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
    </>
  )
}

export default observer(Form)
