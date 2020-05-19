import React from 'react'
import WhatsappButton from './WhatsappButton'

function Menu() {
  return (
    <div className="menu">
      <a
        href="mailto:psiq.guilherme.letsch@gmail.com"
        className='button'
      >
        Enviar email
      </a>
      <WhatsappButton />
    </div>
  )
}

export default Menu
