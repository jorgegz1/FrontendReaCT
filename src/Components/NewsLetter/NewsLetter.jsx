import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Reciba ofertas exclusivas en su correo electrónico</h1>
      <p>Suscríbase a nuestro boletín y manténgase al día</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Suscribete</button>
      </div>
    </div>
  )
}

export default NewsLetter
