import { FC } from 'react'
import { IToDo } from '../../models/IToDo'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import toDoStore from '../../store/toDoStore'

interface IToDoItemProps {
  todo: IToDo
}

const ToDoItem: FC<IToDoItemProps> = ({ todo }) => {
  const { removeTodo } = toDoStore

  const todo__item = cn({
    'todo__item': true,
    'todo__completed': todo.completed,
  })

  return (
    <div
      className={todo__item}
      onClick={() => toDoStore.completeTodo(todo.id)}
      onDoubleClick={() => removeTodo(todo.id)}
    >
      <h2 className='todo__text'>{todo.title}</h2>
    </div>
  )
}

export default observer(ToDoItem)
