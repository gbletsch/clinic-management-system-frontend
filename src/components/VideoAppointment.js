import React from 'react';

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
      <a
        className='button'
        href="https://api.whatsapp.com/send?phone=5548988021771&text=Gostaria%20de%20agendar%20uma%20teleconsulta%20com%20Dr%20Guilherme."      >
          Enviar whatsapp
      </a>
    </div>
  );
}
