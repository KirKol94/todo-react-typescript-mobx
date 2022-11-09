import Filter from './components/filter/Filter'
import Form from './components/form/Form'
import ToDoList from './components/toDoList/ToDoList'

const App = () => {
  return (
    <div className='todo'>
      <h1 className='todo__title'>ToDoList with react && typeScript && mobx</h1>
      <h2 className="todo__subtitle">Клик - меняет статус задачи, двойной клик - удаляет</h2>
      <Form/>
      <Filter/>
      <ToDoList/>
    </div>
  )
}

export default App
