import React, { FC, useState, useEffect } from 'react';
import Router from './router'
import GlobalContext from '@/context'
import { IGlobalContext, User } from '@/service'

const App: FC = () => {
  const [globalState, setGlobalState] = useState<IGlobalContext>({
    theme: 'light',
    updateContext: (newState: Object) => {
      setGlobalState(state => ({
        ...state,
        ...newState
      }))
    }
  })

  useEffect(() => {
    if (!globalState.user) {
      const user = localStorage.getItem('user')
      user && globalState.updateContext({ user: new User(JSON.parse(user)) })
    }
  })

  return <GlobalContext.Provider value={globalState}>
    <Router />
  </GlobalContext.Provider>;
}

export default App;
