import React, { useEffect, useState } from 'react'
import picHeader from '../assets/img/header/header-img.png'
import perso from '../assets/img/header/Ellipse20.png'
import blockdata from '../../public/data/dataservice.json'
import avis from '../assets/img/main/milla.png'
import stomack from '../assets/img/main/transformation.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ben from '../assets/img/main/ben-mess.png'
import salimAfter from '../assets/img/main/salimafter.webp'
import salim from '../assets/img/main/salim.png'
import benLeft from '../assets/img/main/ben.jpeg'

// Default export of the Home component
export default function Home() {

  // State hooks to manage data and the active image number
  const [data, setData] = useState([]);
  const [numberList, setNumberList] = useState(0)

  // Arrays of images to display for the transformation section
  const imagesRight = [
    avis,
    ben,
    salim
  ]
  const imagesLeft = [
    stomack,
    benLeft,
    salimAfter
  ]

  // Function to go to the previous image in the transformation section
  const left = () => {
    setNumberList(numberList - 1)
    if (numberList < 1) {
      // If we're at the first image, loop around to the last
      setNumberList(numberList + 2)
    }
  }

  // Function to go to the next image in the transformation section
  const right = () => {
    setNumberList(numberList + 1)
    if (numberList > 1) {
      // If we're at the last image, loop around to the first
      setNumberList(numberList - 2)
    }
  }

  // Load data from the dataservice.json file when the component mounts
  useEffect(() => {
    setData(blockdata)
  }, [])

  // Render the Home component

  return (
    <>
      <header className='header home'>
        <img src={picHeader} alt="imgheader" />
        <h1 className='home-title'>SHAPE-STRENGTH-PERFORMANCE</h1>
        <div className='blk-grey'>
          <div className='before'>
            <img src={perso} alt="" />
            <div className='abs'>
              <p>🔥 THE FIRST 3 MONTHS AT</p>
              <p>9,90€ /MONTH. 🔥</p>
            </div>
          </div>
          <div className='text-grey'>
            <p className='first'>EVERYTHING YOU NEED FOR YOUR WELL-BEING</p>
            <p className='second'>Our <span className='orange'>different spaces </span></p>
          </div>
        </div>
      </header>

      <main>
        <h2 className='title'>Services</h2>
        <div className='blocks'>
          {data.map((item, i) => <div key={i} className='block'>
            <img src={item.img} alt="" />
            <div>
              <span className='bg-ora'>{item.landeau}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.btn}</p>
            </div>
          </div>)}
        </div>

        <section className='second-section'>
          <img />
          <h1>THE COACH</h1>
          <span className='under'>20 YEARS OF EXPERIENCE</span>
          <p className='text-coach'>With the experience of our partners,
            we offer all kinds of activities.
            Former basketball player and coach
            passionate about the physical, technical
            and mental preparation of top-level
            athletes.Claudio has several years <span className='or'>of experience in the field
              of sports coaching.</span></p>
          <button>Learn more</button>
        </section>

        <section className='three-section'>
          <h1>Transfomation</h1>
          <p>Success takes organization. Whether it is a Weight Loss, Bodybuilding or Functional Training goal, Coach Claudio is here to support and motivate you!</p>
          <div className='block-transformation'>
            <div className='image-transformation'>
              <img src={imagesLeft[numberList]} alt="ventre" />
              <img src={imagesRight[numberList]} alt="margo" />
            </div>
          </div>
          <br />
          <div className='align'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={left} />
            <FontAwesomeIcon icon={faArrowRight} onClick={right} />
          </div>
        </section>
      </main>


      <section className='orange-border-member'>
        <div className='border-block'>
          <h1>WANT TO (RE)BECOME A MEMBER?</h1>
          <p>You had a KEEPCOOL subscription and you want to join us again?
            Reactivate your membership at no cost and with privileged advantages!</p>
          <button>(RE)BECOME A MEMBER?</button>
        </div>
      </section>

      <section className='numbers'>
        <div className='first-numb'>
          <span>152</span>
          <p>users</p>
        </div>
        <div className='second-numb'>
          <span>171</span>
          <p>lesson per month</p>
        </div>
        <div className='three-numb'>
          <span>555</span>
          <p>total lessons</p>
        </div>
      </section>
    </>
  )
}
