import React from 'react';

export default function EmailAppointment() {
  return (
    <div className='appointment-container' >
      <h2>
        Somente para quem já é paciente. 
        Opção não disponível para primeira 
        consulta.
      </h2>
      <p style={{ textAlign: "justify" }}>
        Enviar email contando como está sua <b>evolução no 
        tratamento, a resposta à medicação, se esta tendo algum
        efeito colateral</b>.
      </p>
      <p>
        Quanto mais informações, mais confiável se 
        torna a avaliação.
      </p>
      <a
        className='button'
        href="mailto:psiq.guilherme.letsch@gmail.com?subject=Consulta por email"
      >
        Escrever email
      </a>
    </div>
  );
}
