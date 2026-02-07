const Todo = () => {
  return (
    <>
      <div>Todo</div>
      <button>新規作成</button>
      <div>
        <p>新しい作業を作成</p>
        <button>x</button>
        <label htmlFor="taskName">作業名</label>
        <input type="text" id="taskName" />
        <label htmlFor="memo">メモ（任意）</label>
        <input type="text" id="memo" />
        <button>キャンセル</button>
        <button>作成</button>
      </div>
      <div>
        <p>今日のタスク</p>
        <input type="checkbox" id="task1" />
        <label htmlFor="task1">ランニング</label>
        <input type="checkbox" id="task2" />
        <label htmlFor="task2">ストレッチ</label>
      </div>
    </>
  )
}

export default Todo
