import React, { FC, useContext } from 'react'
import style from './Demo.module.scss'
import { getImg } from '@/utils'
import GlobalContext from '@/context'

const Demo: FC = () => {
  const context = useContext(GlobalContext)
  const { user } = context

  return (
    <div>
      Hello Demo<br></br>
      {JSON.stringify(context)}<br></br>
      <button onClick={() => user && user.update({ name: '我是更新后的用户名' }, context)}>更新用户信息</button>
      <div className={`${style['demo-ignore']} global-ignore`}>我是固定宽高的px容器
      <span style={{ fontSize: '13px' }}>我是固定宽高的行内元素</span>
        <div className={style.children}>我是固定宽高的子元素</div>
      </div>
      <div className={`${style.demo} global`}>我是转换成vw的自适应容器</div>
      <div>本地图片</div>
      <img src={getImg('demo.jpg')} alt="" />
      <div>本地svg</div>
      <img src={getImg('logo.svg')} alt="" />
    </div >
  )
}

export default Demo