import React, { FC, useContext } from 'react'
import style from './MainLayout.module.scss'
import GlobalContext from '@/context'
import { Link } from 'react-router-dom'
import { User } from '@/service'

const themeMap = {
  dark: 'blueTheme',
  light: 'yellowTheme'
}

const MainLayout: FC = (props: any) => {
  const context = useContext(GlobalContext)
  const { updateContext, theme } = context
  const { children } = props
  const changeTheme = () => {
    updateContext({
      theme: theme === 'dark' ? 'light' : 'dark'
    })
  }
  const userLogin = () => {
    const userData = {
      gender: 1,
      name: 'linrong'
    }
    updateContext({
      user: new User({
        name: 'linrong',
        gender: 0
      })
    })
  }
  const userLogout = () => {
    updateContext({ user: undefined })
  }
  return (
    <div className={style[themeMap[context.theme]]}>
      <h1>我是全局Layout</h1>
      <button onClick={() => changeTheme()}>点我切换{context.theme === 'dark' ? 'light' : 'dark'}主题</button>
      <button onClick={() => userLogin()}>点我登录</button>
      <button onClick={() => userLogout()}>点我登出</button>
      <div className={style.nav}>
        <Link className={style.link} to="/">Demo页面</Link>
        <Link className={style.link} to="/home">Home页面</Link>
      </div>
      {children}
    </div>
  )
}

export default MainLayout

