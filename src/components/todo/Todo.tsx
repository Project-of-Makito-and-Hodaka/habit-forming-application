import { useState } from "react";

const Todo = () => {
 const [isOpenCreateTask, setIsOpenCreateTask] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-background p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">TODO</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-text-on-primary px-6 py-2 rounded-lg flex items-center gap-2 font-medium hover:opacity-90 transition-opacity">
              <span className="text-xl">+</span>
              <span>新規作成</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl my-8 bg-card rounded-2xl border border-border p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-text-on-card">タスクの作成</h2>
        </div>
        <div className="space-y-4">
          <label className="block text-lg font-medium text-text-on-card">タスク名 <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="タスク名を入力してください"
            className="w-full p-4 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label className="block text-lg font-medium text-text-on-card">メモ</label>
          <textarea
            placeholder="タスクのメモや詳細を入力"
            className="w-full p-4 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-end gap-4 mt-6">
          <button className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-accent transition-colors" onClick={() => setIsOpenCreateTask(false)}>キャンセル</button>
          <button className="bg-primary text-text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">作成</button>
        </div>
      </div>

      {/* タスク一覧 */}
      <div className="mx-auto max-w-6xl bg-card rounded-2xl border border-border p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-on-card">今日のタスク</h2>
          <span className="text-text-secondary font-medium">0 / 2</span>
        </div>

        {/* タスクリスト*/}
        <div className="space-y-4">
          {/* Task 1 */}
          <div className="bg-card rounded-xl p-6 border border-border hover:bg-accent">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                id="task1"
                className="peer w-5 h-5 mt-1 rounded border-border cursor-pointer accent-primary shrink-0"
              />
              <span className="text-lg font-medium text-text-on-card block mb-1 peer-checked:line-through">
                ランニング
              </span>
            </label>
            <p className="text-text-secondary ml-9">30分程度</p>
          </div>

          {/* Task 2 */}
          <div className="bg-card rounded-xl p-6 border border-border hover:bg-accent">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                id="task2"
                className="peer w-5 h-5 mt-1 rounded border-border cursor-pointer accent-primary shrink-0"
              />
              <span className="text-lg font-medium text-text-on-card block mb-1 peer-checked:line-through">
                読書
              </span>
            </label>
            <p className="text-text-secondary ml-9">1日1章</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
