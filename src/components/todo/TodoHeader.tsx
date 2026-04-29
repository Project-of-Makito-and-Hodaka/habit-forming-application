type TodoHeaderProps = {
  currentTime: Date
  onAddTask: () => void
}

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekdays = ['日', '月', '火', '水', '木', '金', '土']
  const weekday = weekdays[date.getDay()]
  return `${year}年${month}月${day}日${weekday}曜日`
}

const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const TodoHeader = ({ currentTime, onAddTask }: TodoHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">今日のタスク</h1>
          <p className="text-sm text-gray-500">{formatDate(currentTime)}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">{formatTime(currentTime)}</div>
          <p className="text-xs text-gray-500">現在時刻</p>
        </div>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors"
        onClick={onAddTask}
      >
        <span className="text-lg">+</span>
        <span>新規タスク</span>
      </button>
    </div>
  )
}

export default TodoHeader
