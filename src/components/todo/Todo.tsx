import { useState } from "react"

const Todo = () => {
    type Todo = {
        taskName: string;
        memo?: string;
        completed: boolean;
    }
    const [isOpen, setIsOpen] = useState(false);
    const [totdos, setTodos] = useState<Todo[]>([]);
    const [taskName, setTaskName] = useState('');
    const [memo, setMemo] = useState('');

    const addTodo = (todo: Todo) => {
        setTodos((prev) => [...prev, todo]);
    }
    
    const handleCreate = () => {
        if (!taskName.trim()) return;

        addTodo({ taskName:taskName.trim(), memo: memo.trim(), completed: false });
        setTaskName('');
        setMemo('');
        setIsOpen(false);
    }

    const handleCancel = () => {
        setTaskName('');
        setMemo('');
    }

    const toggleCompleted = (index: number) => {
        setTodos((prev) => 
            prev.map((todo, i) => 
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    
    return (
        <>
            <div>Todo</div>
            <button onClick={() => setIsOpen(true)}>新規作成</button>
            {isOpen && (
                <div>
                    <p>新しい作業を作成</p>
                    <button onClick={() => setIsOpen(false)}>x</button>
                    <label htmlFor="taskName">作業名</label>
                    <input type="text" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                    <label htmlFor="memo">メモ（任意）</label>
                    <input type="text" id="memo" value={memo} onChange={(e) => setMemo(e.target.value)} />
                    <button onClick={handleCancel}>キャンセル</button>
                    <button onClick={handleCreate}>作成</button>
                </div>
            )}
            <div>
                <p>今日のタスク</p>
                {totdos.map((todo, index) => {
                    return (
                        <div key={index}>
                            <input type="checkbox" id={`task-${index}`} checked={todo.completed} onChange={() => toggleCompleted(index)} />
                            <label htmlFor={`task-${index}`} style={{ textDecoration: todo.completed ? 'line-through' : 'none', opacity: todo.completed ? 0.6 : 1, }}>{todo.taskName}</label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Todo
