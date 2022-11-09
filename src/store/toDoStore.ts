import { FilterType } from '../models/IFilter'
import { IToDo } from '../models/IToDo'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'

class toDoStore {
  todos: IToDo[] = []
  isFetching: boolean = false
  filteredBy: FilterType = 'all'

  constructor () {
    makeAutoObservable(this)
  }

  fetchToDoItems = async () => {
    this._setIsFetching(true)
    const res = await axios.get<IToDo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    )
    this._setIsFetching(false)
    this._setToDo(res.data)
  }

  addTodo = (todo: IToDo) => {
    this.todos = [todo, ...this.todos]
  }

  completeTodo = (id: number): void => {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    )
  }

  removeTodo = (id: number) => {
    if (window.confirm('Удалить заметку?')) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }

  filter = (condition: FilterType) => {
    this.filteredBy = condition
  }

  private _setToDo = (todos: IToDo[]) => {
    this.todos = [...this.todos, ...todos]
  }
  private _setIsFetching = (status: boolean) => {
    this.isFetching = status
  }
}

export default new toDoStore()
