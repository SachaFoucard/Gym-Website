import React from 'react'
import picserv from '../assets/img/header/service/header/image 14.png'
import picser from '../assets/img/header/service/main/coachs-kc 1.png'
import picc from '../assets/img/header/service/main/gabin-vallet-J154nEkpzlQ-unsplash 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch20 } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import { faBottleWater } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'



export default function Services() {
  return (
    <>
      <section className='service'>
        <header>
          <img src={picserv} alt="imgheader" />
          <h2>ALL <span className='orange'> PUBLIC</span></h2>
          <div className='blk-grey'>
            <div className='text-grey'>
              <p className='first-service'>Sports training for<span className='orange'> all purposes</span> ,<span className='orange'> all ages</span> and,<span className='orange'> all levels.</span>
                Individual or small group sessions.</p>
            </div>
          </div>
        </header>

        <h1>At your service</h1>
        <main className='service-main'>
          <div>
            <img src={picser} alt="" />
          </div>
          <div className='text-service'>
            <ul>
              <li>Claudio is a personal sports trainer. Whatever your goal, he will come to you with all the necessary equipment.</li>
              <li>Alone or in a small group, he takes you where you want and at the best time for you. It offers sessions at home, in the gym, outdoors ...</li>
              <li>He is at your disposal by adapting to your constraints: working hours, health problems, discretion, mobility ..</li>
              <li>He is there to support you whatever your athletic background, both beginner and high level athlete. </li>
              <li>And finally, whatever your age, it adapts to your physical condition and your specific needs.</li>
            </ul>
          </div>
        </main>

        <section className='extra'>
          <div>
            <h1>The extra thing</h1>
            <p>If you want to benefit from advantageous rates,
              consider training in a small group of up to 4 people.
              And if you do not know anyone with whom to train,
              Claudio can suggest that you <span className='orange'>join an</span> existing training group in your area!
              With many it is more <span className='orange'> ADVANTAGEOUS </span>
              and more <span className='orange'> MOTIVATION !</span> </p>
          </div>
          <div>
            <img src={picc} alt="" />
          </div>
        </section>

        <section className='practical'>
          <h1>Practical information </h1>
          <div className='information-block'>
            <h2>Training <span className='orange'>location:</span> <FontAwesomeIcon icon={faLocationDot} /></h2>
            <p>At home, in a gym, outdoors (park, beach, forest ...)</p>
          </div>
          <div className='information-block'>
            <h2>Training <span className='orange'>hours:</span><FontAwesomeIcon icon={faStopwatch20} /> </h2>
            <p>Times lots possible from 6 a.m. to 9 p.m. / 
              Monday to Friday and from 6 a.m. to 11 a.m. on Saturday</p>
          </div>
          <div className='information-block'>
            <h2>Duration <span className='orange'>of a session:</span><FontAwesomeIcon icon={faCalendarCheck} /></h2>
            <p>On average one hour</p>
          </div>
          <div className='information-block'>
            <h2>Material <span className='orange'>required:</span><FontAwesomeIcon icon={faBottleWater} /></h2>
            <p>A clean towel and a bottle of water</p>
          </div>
          <div className=' specialLineHeight'>
            <h2>Before <span className='orange'>the first session:</span><FontAwesomeIcon icon={faDumbbell} /></h2>
            <ol>
              <li>1) Make an appointment with Claudio (by phone, by email or via the contact form )</li>
              <li>2) A 45-minute interview will be offered to you</li>
              <li>3) Preparation of the estimate  (free)</li>
              <li>4) Acceptance of the estimate and payment</li>
              5) Start of the first session
            </ol>
          </div>
        </section>
      </section>
    </>
  )
}
