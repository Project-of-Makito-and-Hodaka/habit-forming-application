import { useState } from 'react'
import type { TodoType } from '../../types/todo'

type TaskFormProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (task: TodoType) => void
}

const TaskForm = ({ isOpen, onClose, onSubmit }: TaskFormProps) => {
  const [taskName, setTaskName] = useState('')
  const [memo, setMemo] = useState('')

  const handleCreate = () => {
    if (!taskName.trim()) return

    onSubmit({
      taskName: taskName.trim(),
      memo: memo.trim(),
      completed: false,
      repeat: '毎日',
      time: '09:00',
      hasNotification: true,
    })
    setTaskName('')
    setMemo('')
  }

  const handleCancel = () => {
    setTaskName('')
    setMemo('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="mb-6 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-900">タスクの作成</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
          <span className="text-3xl">×</span>
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            タスク名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="タスク名を入力してください"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">メモ</label>
          <textarea
            placeholder="タスクのメモや詳細を入力"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 h-24 resize-none"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-6">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          onClick={handleCancel}
        >
          キャンセル
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          onClick={handleCreate}
        >
          作成
        </button>
      </div>
    </div>
  )
}

export default TaskForm
