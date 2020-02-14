import React, { FC, useContext, useState } from 'react';
import Router from './router'
import GlobalContext from '@/context'
import { IGlobalContext } from '@/interface'

const App: FC = () => {
  const [globalState, setGlobalState] = useState<IGlobalContext>({
    theme: 'light',
    user: {},
    updateContext: (newState: Object) => {
      setGlobalState(state => ({
        ...state,
        ...newState
      }))
    }
  })
  return <GlobalContext.Provider value={globalState}>
    <Router />
  </GlobalContext.Provider>;
}

export default App;
