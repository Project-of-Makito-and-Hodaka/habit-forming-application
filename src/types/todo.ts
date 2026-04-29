export type TodoType = {
  taskName: string
  memo?: string
  completed: boolean
  repeat: '毎日' | '平日' | 'カスタム'
  time?: string
  hasNotification: boolean
}

export type FilterType = 'すべて' | '未完了' | '完了済み'
