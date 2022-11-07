import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import toDoState from '../../state/toDoState'

const Filter = () => {
  const filteredBy = toDoState.filteredBy

  const filteredByAllClasses = classNames({
    'todo__filter-item': true,
    _active: filteredBy === 'all',
  })

  const filteredByIsCompletedClasses = classNames({
    'todo__filter-item': true,
    _active: filteredBy === 'isCompleted',
  })

  const filteredByIsNotCompletedClasses = classNames({
    'todo__filter-item': true,
    _active: filteredBy === 'isNotCompleted',
  })

  return (
    <div className='todo__filter'>
      <div
        className={filteredByAllClasses}
        onClick={() => toDoState.filter('all')}
      >
        Все
      </div>
      <div
        className={filteredByIsCompletedClasses}
        onClick={() => toDoState.filter('isCompleted')}
      >
        Выполненные
      </div>
      <div
        className={filteredByIsNotCompletedClasses}
        onClick={() => toDoState.filter('isNotCompleted')}
      >
        Не выполненные
      </div>
    </div>
  )
}

export default observer(Filter)
