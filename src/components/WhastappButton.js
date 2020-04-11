import React from 'react'

export default function WhastappButton() {

  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
  
  const isMobile = isMobileDevice()
  
  let webOrApi = ''
  if (isMobile) {webOrApi = 'api'} else {webOrApi = 'web'} 
  return (
    <a
      className='button'
      href={`https://${webOrApi}.whatsapp.com/send?phone=5548988021771&text=Gostaria%20de%20agendar%20uma%20consulta%20com%20Dr%20Guilherme,%20pode%20me%20ajudar?`}
    >
        Enviar whatsapp
    </a>
  )
}