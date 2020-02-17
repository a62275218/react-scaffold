import React, { FC, useState, useEffect } from 'react';
import Router from './router'
import GlobalContext from '@/context'
import { IGlobalContext, User } from '@/service'

const App: FC = () => {
  const [globalState, setGlobalState] = useState<IGlobalContext>({
    // 这里写全局的初始状态
    theme: 'light',
    // 更新全局状态函数
    updateContext: (newState: Object) => {
      setGlobalState(state => ({
        ...state,
        ...newState
      }))
    }
  })

  useEffect(() => {
    if (!globalState.user) {
      User.restore(globalState)
    }
  })

  return <GlobalContext.Provider value={globalState}>
    <Router />
  </GlobalContext.Provider>;
}

export default App;
