import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

type TodoType = {
  taskName: string
  memo?: string
  completed: boolean
}

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [todos, setTodos] = useState<TodoType[]>([])
  const [taskName, setTaskName] = useState('')
  const [memo, setMemo] = useState('')

  const addTodo = (todo: TodoType) => {
    setTodos((prev) => [...prev, todo])
  }

  const handleCreate = () => {
    if (!taskName.trim()) return

    addTodo({ taskName: taskName.trim(), memo: memo.trim(), completed: false })
    setTaskName('')
    setMemo('')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTaskName('')
    setMemo('')
  }

  const toggleCompleted = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)),
    )
  }

  const filteredCompletedTodos = todos.filter((todo) => todo.completed)

  return (
    <div className="min-h-screen bg-background p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">TODO</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-primary text-text-on-primary px-6 py-2 rounded-lg flex items-center gap-2 font-medium hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(true)}
            >
              <span className="text-xl">+</span>
              <span>新規作成</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto max-w-6xl my-8 bg-card rounded-2xl border border-border p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
            <h2 className="text-2xl font-bold text-text-on-card">タスクの作成</h2>
            <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary cursor-pointer">
              <span className="text-4xl">×</span>
            </button>
          </div>
          <div className="space-y-4">
            <label className="block text-lg font-medium text-text-on-card">
              タスク名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="タスク名を入力してください"
              className="w-full p-4 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <label className="block text-lg font-medium text-text-on-card">メモ</label>
            <textarea
              placeholder="タスクのメモや詳細を入力"
              className="w-full p-4 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-end gap-4 mt-6">
            <button
              className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              onClick={handleCancel}
            >
              キャンセル
            </button>
            <button
              className="bg-primary text-text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={handleCreate}
            >
              作成
            </button>
          </div>
        </div>
      )}

      {/* タスク一覧 */}
      <div className="mx-auto max-w-6xl bg-card rounded-2xl border border-border p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-on-card">今日のタスク</h2>
          <span className="text-text-secondary font-medium">
            {filteredCompletedTodos.length} / {todos.length}
          </span>
        </div>

        {/* タスクリスト*/}
        <div className="space-y-4">
          {todos.map((todo, index) => {
            return (
              <div
                key={index}
                className="relative bg-card rounded-xl p-6 border border-border hover:bg-accent"
              >
                <div className="pr-16">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      id={`task-${index}`}
                      className="peer w-5 h-5 mt-1 rounded border-border cursor-pointer accent-primary shrink-0"
                      checked={todo.completed}
                      onChange={() => toggleCompleted(index)}
                    />
                    <span className="text-lg font-medium text-text-on-card block mb-1 peer-checked:line-through">
                      {todo.taskName}
                    </span>
                  </label>
                  <p className="text-text-secondary ml-9">{todo.memo}</p>
                </div>
                {todo.completed && (
                  <FaCheckCircle className="absolute top-1/2 -translate-y-1/2 right-4 text-green-500 size-7 shrink-0" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Todo
