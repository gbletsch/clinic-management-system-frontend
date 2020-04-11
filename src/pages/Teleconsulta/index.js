import React, { useState } from 'react';
import './Styles.css'

import logoImg from '../../assets/logo.png'
import EmailAppointment from '../../components/EmailAppointment'
import AudioAppointment from '../../components/AudioAppointment'
import VideoAppointment from '../../components/VideoAppointment'

export default function Teleconsulta() {
  const [appointmentType, setAppointment] = useState('')

  function handleChange (e) {
    setAppointment(e.target.value)
  }

  return (
    <div className="tele-container">
      <img src={logoImg} height='150' alt="logo"/>
      <section className="form">
        <form>
          <h1>Psiq Guilherme Letsch</h1>
          <h2>Orientações para consultas no período de quarentena</h2>
          <p>
            Durante a pandemia, para proteção dos pacientes e
            funcionários serão realizadas preferencialmente 
            teleconsultas.
          </p>
          <p>Escolha uma das 3 possibilidades de atendimento:</p>
          
          <input
            type="radio"
            value='email'
            checked={appointmentType === 'email'}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
          >
            Email
          </label><br/>
          <input
            type="radio"
            value='audio'
            checked={appointmentType === 'audio'}
            onChange={handleChange}
          />
          <label htmlFor="audio">
            Telefone
          </label><br/>
          <input
            type="radio"
            value='video'
            checked={appointmentType === 'video'}
            onChange={handleChange}
          />
          <label htmlFor="video">
            Video
          </label><br/>
          {(appointmentType === 'email') && (
              <EmailAppointment />
          )}
          {(appointmentType === 'audio') && (
              <AudioAppointment />
          )}
          {(appointmentType === 'video') && (
              <VideoAppointment />
          )}
        </form>
      </section>
      <footer>
        <p>Guilherme Letsch - CRM 24202</p>
        <p>psiq.guilherme.letsch@gmail.com</p>
      </footer>
    </div>
  );
}
