import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <h1>Questions ?</h1>
        <form action="">
          <div className='inputs'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='E-Mail' />
            <input type="tel" name="" placeholder='Tel' />
          </div>
          <div className='txt-form'>
            <p>Phone number: 06 32 535 898 / Email: moncoachclaudio@gmail.com</p>

            <textarea name="" id="" cols="30" rows="10" placeholder='Please write your message here '></textarea>
            <button>Send</button>
          </div>

        </form>
      </footer>
      <Link className='lien' to="https://foucardsacha.netlify.app/"><p>&copy; website build in react by sacha foucard </p></Link>
    </>
  )
}
