import { FilterType } from '../models/IFilter'
import { IToDo } from '../models/IToDo'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'

class toDoState {
  todos: IToDo[] = []
  filteredBy: FilterType = 'all'

  constructor() {
    makeAutoObservable(this)
  }

  addTodo = (todo: IToDo) => {
    this.todos = [todo, ...this.todos]
  }

  removeTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo = (id: number): void => {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }

  setToDo = (todos: IToDo[]) => {
    this.todos = [...this.todos, ...todos]
  }

  fetchToDoItems = async () => {
    const res = await axios.get<IToDo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    )
    this.setToDo(res.data)
  }

  filter = (condition: FilterType) => {
    this.filteredBy = condition
  }
}

export default new toDoState()
