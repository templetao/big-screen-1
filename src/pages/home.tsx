import React, {useEffect, useRef} from 'react'
import './home.scss'
import headerBg from '../images/header.png'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>
        大屏数据平台利用大数据技术采集作案信息是一套实时监控的信息系统
      </footer>
    </div>
  )
}