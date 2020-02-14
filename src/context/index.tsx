import { createContext } from 'react'
import { IGlobalContext } from '@/interface'

export default createContext<IGlobalContext>({
  theme: '',
  user: {},
  updateContext: () => { }
})