import { createContext } from 'react'
import { IGlobalContext } from '@/service'

export default createContext<IGlobalContext>({
  theme: '',
  updateContext: () => { }
});