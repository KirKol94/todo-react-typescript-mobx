import Filter from './components/filter/Filter'
import Form from './components/form/Form'
import ToDoList from './components/toDoList/ToDoList'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    alert(`
Один клик - выполненно / не выполненно
Два - удалить заметку
Добавление заметки на enter и потерю фокуса с поля (или tab) `)
  }, [])
  return (
    <div className='todo'>
      <h1 className='todo__title'>ToDoList with react && typeScript && mobx</h1>{' '}
      <Form />
      <Filter />
      <ToDoList />
    </div>
  )
}

export default App
