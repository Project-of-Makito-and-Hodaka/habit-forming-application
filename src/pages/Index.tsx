import { useState } from 'react'
import Header from '../components/ui/Header'
import Tab from '../components/ui/tab/Tab'
import { TABS } from '../constants/constant'
import Todo from './Todo'

type TabsType = (typeof TABS)[number]

const Index = () => {
  const [tab, setTab] = useState<TabsType>('Todo')

  return (
    <>
      <Header />
      <div className="mx-auto min-w-3xl max-w-4xl px-4 py-6 mb-6">
        <Tab currentTab={tab} setTab={setTab} />
        {tab === 'Todo' && <Todo />}
      </div>
    </>
  )
}

export default Index
