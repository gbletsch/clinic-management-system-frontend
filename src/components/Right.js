import React from 'react'
import LogoGui from '../assets/logo_gui.png'

function Right() {
  return (
    <div className="right">
      <div className="content">
        <h2>Sobre:</h2>
        <img src={LogoGui} alt=""/>
        <p><b>Guilherme Boelhouwer Letsch</b></p>
        <p>Médico psiquiatra</p>
        <p>CRM-SC 24202</p>
        <p>RQE 14558</p>
        <p>Especialista em Dependência Química.</p>
      </div>
    </div>
  )
}

export default Right
