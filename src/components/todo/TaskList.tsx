import type { TodoType } from '../../types/todo'
import TaskItem from './TaskItem'

type TaskListProps = {
  tasks: TodoType[]
  onToggle: (index: number) => void
}

const TaskList = ({ tasks, onToggle }: TaskListProps) => {
  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onToggle={() => onToggle(index)} />
      ))}
    </div>
  )
}

export default TaskList
