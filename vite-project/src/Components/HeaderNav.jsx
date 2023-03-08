import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function HeaderNav() {
  const [show, setShow] = useState(true);
  const [navshowMobile, setnavshowMobile] = useState(true);

  const active = () => {
    setnavshowMobile(!navshowMobile)
    console.log(navshowMobile);
  }
  const hide = () => {
    setShow(!show);
  };

  return (
    <>
      {
        show ?
          <div className='ask'>
            <p>
              <span className='white underline'>Any question ?</span>
              <span className='blk underline'>I'm here to help you</span>
              <span onClick={hide} className='close'><FontAwesomeIcon icon={faXmark} /></span>
            </p>
          </div> : ''
      }

      <section className='nav grid clm3'>

        <Link to="/">
          <img src={logo} />
        </Link>

        <nav className='max'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/concept">Concept</Link>
            </li>
            <li>
              <Link to="/services"> Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="">Gallerie</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav className='min nav-mobile'>
          <FontAwesomeIcon onClick={active} icon={faBars} />
          {
            !navshowMobile ?
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/concept">Concept</Link>
                </li>
                <li>
                  <Link to="/services"> Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="">Gallerie</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul> : null
          }

        </nav>
     
      </section>
    </>
  )
}
