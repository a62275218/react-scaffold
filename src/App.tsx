import React, { FC, useState, useEffect } from 'react';
import Router from './router'
import GlobalContext from '@/context'
import { IGlobalContext, User } from '@/service'

const App: FC = () => {
  const [globalState, setGlobalState] = useState<IGlobalContext>({
    theme: 'light',
    updateContext: (newState: Object) => {
      GlobalContext && setGlobalState(state => ({
        ...state,
        ...newState
      }))
    }
  })
  const { user } = globalState

  useEffect(() => {
    if (user) {
      // 这里不用箭头函数来确保this指向user
      user.update = function (newProp: object) {
        Object.keys(newProp).forEach(key => {
          this[key] = newProp[key]
        })
        globalState.updateContext({ user: this })
      }
    }
  }, [user])

  return <GlobalContext.Provider value={globalState}>
    <Router />
  </GlobalContext.Provider>;
}

export default App;
