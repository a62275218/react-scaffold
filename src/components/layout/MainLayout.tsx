import React, { FC, useContext } from 'react'
import style from './MainLayout.module.scss'
import GlobalContext from '@/context'
import { Link } from 'react-router-dom'

const themeMap = {
  dark: 'blueTheme',
  light: 'yellowTheme'
}

const MainLayout: FC = (props: any) => {
  const context = useContext(GlobalContext)
  const { children } = props
  const changeTheme = () => {
    const { updateContext, theme } = context
    updateContext({
      theme: theme === 'dark' ? 'light' : 'dark'
    })
  }
  return (
    <div className={style[themeMap[context.theme]]}>
      <button onClick={() => changeTheme()}>点我切换{context.theme === 'dark' ? 'light' : 'dark'}主题</button>
      <h1>我是全局Layout</h1>
      <div className={style.nav}>
        <Link className={style.link} to="/">Demo页面</Link>
        <Link className={style.link} to="/home">Home页面</Link>
      </div>
      {children}
    </div>
  )
}

export default MainLayout

