import ToDoItem from '../toDoItem/ToDoItem'
import { observer } from 'mobx-react-lite'
import toDoStore from '../../store/toDoStore'
import { useEffect } from 'react'

const ToDoList = () => {
  const { fetchToDoItems, todos, filteredBy, isFetching } = toDoStore

  const filtered = () => {
    switch (filteredBy) {
      case 'all':
        return todos
      case 'isCompleted':
        return [...todos.filter(todo => todo.completed)]
      case 'isNotCompleted':
        return [...todos.filter(todo => !todo.completed)]
      default:
        return todos
    }
  }

  useEffect(() => {
    fetchToDoItems()
  }, [])

  if (isFetching){
    return(
      <div className="loader todo__loader">Загрузка...</div>
    )
  }

  return (
    <div className='todo__list'>
      {filtered().map(todo => (
        <ToDoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default observer(ToDoList)
