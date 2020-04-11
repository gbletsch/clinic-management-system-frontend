import React from 'react';
import './Styles.css'

import logoImg from '../../assets/logo.png'
import { FiLogIn } from 'react-icons/fi'

export default function Login() {
  return (
    <div className="login-container">
      <img src={logoImg} height='150' alt="logo"/>
      <section className="form">
        <form>
          <h1>Login</h1>
          <input placeholder='Email' />
          <input type="password" placeholder='Senha'/>
          <button className='button' type="submit">Entrar</button>
          <a href="/register">
            <FiLogIn size={16} color='#23987E' />
            Não tenho cadastro
          </a>
        </form>
      </section>
    </div>
  );
}
