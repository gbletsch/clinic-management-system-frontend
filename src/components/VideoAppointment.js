import React from 'react';

import WhatsappButton from '../components/WhastappButton'

export default function VideoAppointment () {
  return (
    <div className='appointment-container' >
      <h2>
        No momento, somente temos possibilidade de consultas por
        video utilizando o Hangouts. 
      </h2>
      <p>
        Entrar em contato com a <b>MedClin</b> apartir
        do dia 13/04/2020 pelos telefones: <b>(48) 3304-7306 
        - 3304-7296</b> ou por whatsapp: <b>(48) 98802-1771</b>.
      </p>
      <p>
        Será agendado um horário de consulta e ligaremos 
        para você no horário agendado
      </p>
      <WhatsappButton />
    </div>
  );
}
