import React from 'react'
import style from './Demo.module.scss'
import { getImg } from '@/utils'

export default function Demo() {
  return (
    <div>
      Hello Demo
      <div className={`${style['demo-ignore']} global-ignore`}>我是固定宽高的px容器
      <span style={{ fontSize: '13px' }}>我是固定宽高的行内元素</span>
        <div className={style.children}>我是固定宽高的子元素</div>
      </div>
      <div className={`${style.demo} global`}>我是转换成vw的自适应容器</div>
      <div>获取本地图片</div>
      <img src={getImg('demo.jpg')} alt="" />
    </div >
  )
}