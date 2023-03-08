import React, { useEffect, useState } from 'react'
import '../Styles/blog.css'
import picfoodhe from '../assets/img/header/blog/header/Rectangle 86.png'
import dataBoxes from '../../public/data/boxBlog.json'

export default function Blog() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(dataBoxes)
  }, [])
  return (
    <>
      <header className='blog'>
        <h1>Blog
          <br />
          <span className='small-txt'>Our news, advice, tips & interviews</span></h1>
      </header>
      <div className='abs'>
        <img src={picfoodhe} alt="" />
      </div>

      <main className='blog-main' >
        <h2>Choose the topic that interests you</h2>
        <div className='all-button'>
          <button className='bl'>News</button>
          <button className='red'>Fitness Tips</button>
          <button className='orang'>Well Being</button>
          <button className='green'>Motivation</button>
          <br />
          <button className='blue'>Nutrition</button>
          <button className='pink'>Interview</button>
        </div>
        <section className='boxes'>
          {
            data.map((item, i) => <div className='box'>
              <img src={item.img} alt="" />
              <p>{item.date}</p>
              <h4>{item.title}</h4>
            </div>)
          }
        </section>
        <p>1 2 3 4 5 6 7 8 9 ...   Last </p>
      </main>


    </>
  )
}
