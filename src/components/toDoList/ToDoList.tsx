import ToDoItem from '../toDoItem/ToDoItem'
import { observer } from 'mobx-react-lite'
import toDoStore from '../../store/toDoStore'
import { useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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

  return (
    <>
      {isFetching && <div className="loader todo__loader">Загрузка...</div>}
      {!isFetching && (
        <TransitionGroup component="div" className='todo__list'>
          {filtered().map(todo => (
            <CSSTransition
              key={todo.id}
              timeout={500}
              classNames="todo__item"
            >

              <ToDoItem todo={todo}/>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  )
}

export default observer(ToDoList)
