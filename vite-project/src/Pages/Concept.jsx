import React from 'react'
import pic from '../assets/img/header/concept/header/header.png'
import pic1 from '../assets/img/header/concept/main-blocks/mark-adriane-FH6JcaCrYJ0-unsplash 1.png'
import pic2 from '../assets/img/header/concept/main-blocks/mark-adriane-FH6JcaCrYJ0-unsplash 3.png'
import pic3 from '../assets/img/header/concept/main-blocks/mark-adriane-FH6JcaCrYJ0-unsplash 4.png'
import stars from '../assets/img/header/concept/section/stars.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import myObj from '../assets/img/header/concept/section/my objetcif.png'
export default function Concept() {
  return (
    <>
      <header className='header'>
        <img src={pic} alt="imgheader" />
        <h1>OUR <span className='orange'>CONCEPT</span></h1>
        <div className='blk-grey'>
          <div className='text-grey'>
            <p className='first'>ARE YOU LOOKING FOR A</p>
            <span className='orange'> specialized, qualified and experienced sports trainer?</span>
          </div>
        </div>
      </header>

      <main>
        <div className='block-concept'>
          <div className='l'>
            <h4>MY MISSION IS TO HELP YOU ACHIEVE </h4>
            <div className='bar'></div>
            <h3>YOUR GOALS IN THE FIELDS  OF SHAPE, STRENGTH AND PERFORMANCE.</h3>
            <p className='txt-small'>My coach Claudio <span className='orange'>is one and only</span> qualified
              and experienced   CLAUDIO trainer who knows
              you perfectly and  who adapts his training according
              to <span className='orange'>your needs .</span></p>
            <p className='btn'>Questions?<span className='orange'><u> We answer you →</u></span></p>

          </div>
          <div className='r'>
            <img src={pic1} alt="" />
          </div>
        </div>

        <div className='block-concept'>
          <div className='r'>
            <img src={pic2} alt="" />
          </div>
          <div className='l'>
            <h4>It  creates  a <span className='orange'>unique program for you</span></h4>
            <div className='bar'></div>
            <h3>Follows you throughout your sporting journey.</h3>
            <p className='txt-small'>Claudio is <span className='orange'> passionate</span> about his job.
              Constantly on standby, he trains himself in
              new techniques and regularly equips himself with
              <span className='orange'> innovative</span> sports equipment.</p>
          </div>
        </div>

        <div className='block-concept'>
          <div className='l'>
            <h4>SINCE <span className='orange'>2020</span></h4>
            <div className='bar'></div>
            <h3>"My coach Claudio" aims to allow
              a practice of sport in the respect of
              the body and the spirit .</h3>
            <p className='txt-small'>The working methods are<span className='orange'> natural</span> and <span className='orange'> adapt</span> to each person.
              Means are put in place to<span className='orange'> measure progress in </span>
              order to allow everyone to assess the levels reached.</p>
          </div>
          <div className='r'>
            <img src={pic3} alt="" />
          </div>
        </div>
      </main>

      <section className='grades'>
        <h2>OUR BEST AMBASSADORS ARE YOU.</h2>
        <h3>#EnPlusCool, you too share your Coach Claudio experiences</h3>
        <img src={stars} alt="" />
        <p className='txt-small'>out of 5 out of more customer reviews</p>
        <div className='icons-concept'>
          <p>Follow us everywhere :</p>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </section>

      <section className='myObjectif'>
        <img src={myObj} alt="" />
      </section>
    </>
  )
}
