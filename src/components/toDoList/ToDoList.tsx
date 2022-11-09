import ToDoItem from '../toDoItem/ToDoItem'
import { observer } from 'mobx-react-lite'
import toDoState from '../../state/toDoState'
import { useEffect } from 'react'

const ToDoList = () => {
  const todos = toDoState.todos
  const filterBy = toDoState.filteredBy

  useEffect(() => {
    toDoState.fetchToDoItems()
  }, [])

  const filtered = () => {
    switch (filterBy) {
      case 'all':
        return todos
      case 'isCompleted':
        return [ ...todos.filter(todo => todo.completed) ]
      case 'isNotCompleted':
        return [ ...todos.filter(todo => !todo.completed) ]
      default:
        return todos
    }
  }

  return (
    <div className='todo__list'>
      {filtered()
        .map(todo => (
          <ToDoItem key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default observer(ToDoList)
