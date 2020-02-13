import React from 'react'
import style from './MainLayout.module.scss'

function MainLayout(props: any) {
    const { children } = props
    return (
        <div className={style.theme}>
            <button>点我切换主题</button>
            <h1>Main Layout</h1>
            {children}
        </div>
    )
}

export default MainLayout

