import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import toDoStore from '../../store/toDoStore'

const Filter = () => {
  const { filteredBy, filter } = toDoStore

  const filteredByAllClasses = cn({
    'todo__filter-item': true,
    _active: filteredBy === 'all',
  })

  const filteredByIsCompletedClasses = cn({
    'todo__filter-item': true,
    _active: filteredBy === 'isCompleted',
  })

  const filteredByIsNotCompletedClasses = cn({
    'todo__filter-item': true,
    _active: filteredBy === 'isNotCompleted',
  })

  return (
    <div className='todo__filter'>
      <div
        className={filteredByAllClasses}
        onClick={() => filter('all')}
      >
        Все
      </div>
      <div
        className={filteredByIsCompletedClasses}
        onClick={() => filter('isCompleted')}
      >
        Выполненные
      </div>
      <div
        className={filteredByIsNotCompletedClasses}
        onClick={() => filter('isNotCompleted')}
      >
        Не выполненные
      </div>
    </div>
  )
}

export default observer(Filter)
