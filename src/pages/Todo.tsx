import { useState, useEffect } from 'react'
import type { FilterType, TodoType } from '../types/todo'
import TodoHeader from '../components/todo/TodoHeader'
import ProgressBar from '../components/todo/ProgressBar'
import FilterTabs from '../components/todo/FilterTabs'
import TaskForm from '../components/todo/TaskForm'
import TaskList from '../components/todo/TaskList'

const INITIAL_TASKS: TodoType[] = [
  {
    taskName: '朝のストレッチ',
    memo: '起床後に10分間の軽いストレッチ',
    completed: true,
    repeat: '毎日',
    time: '07:00',
    hasNotification: true,
  },
  {
    taskName: '読書',
    memo: '最低20ページ読む',
    completed: false,
    repeat: '毎日',
    time: '21:00',
    hasNotification: true,
  },
  {
    taskName: '英語の勉強',
    memo: '単語と聞き取り練習',
    completed: false,
    repeat: '平日',
    time: '19:00',
    hasNotification: true,
  },
  {
    taskName: 'ランニング',
    memo: '公園を30分ジョギング',
    completed: false,
    repeat: 'カスタム',
    time: '',
    hasNotification: false,
  },
  {
    taskName: '瞑想',
    memo: '15分間のマインドフルネス',
    completed: true,
    repeat: '毎日',
    time: '22:00',
    hasNotification: true,
  },
]

const Todo = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [filter, setFilter] = useState<FilterType>('すべて')
  const [todos, setTodos] = useState<TodoType[]>(INITIAL_TASKS)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleAddTask = (task: TodoType) => {
    setTodos((prev) => [...prev, task])
    setIsFormOpen(false)
  }

  const handleToggleTask = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === '未完了') return !todo.completed
    if (filter === '完了済み') return todo.completed
    return true
  })

  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div>
      <TodoHeader currentTime={currentTime} onAddTask={() => setIsFormOpen(true)} />
      <ProgressBar completedCount={completedCount} totalCount={todos.length} />
      <FilterTabs currentFilter={filter} onFilterChange={setFilter} />
      <TaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleAddTask} />
      <TaskList tasks={filteredTodos} onToggle={handleToggleTask} />
    </div>
  )
}

export default Todo
