import React from 'react';

import './Styles.css'
import logoImg from '../../assets/logo.png'

export default function ContactForm() {
  return (
    <div className="contact-form-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Psiq Guilherme Letsch"/>
          <h1>Faça contato</h1>

        </section>
        <form>
          Form
        </form>
      </div>
    </div>
  );
}
