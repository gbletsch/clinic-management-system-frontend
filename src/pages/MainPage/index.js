import React from 'react';
import ImgBoat from '../../assets/barco.jpg'

import './Style.css'

function MainPage() {
  return (
    <div className="main-container">
      <section className="top">
        <div className="top__left">
          <h1>Guilherme Boelhouwer Letsch</h1>
          <h2>Psiquiatra</h2>
        </div>
        <img src={ImgBoat} alt="imagem"/>
      </section>
      <div className="appointment">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
      </div>
      <div className="news">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
      </div>
      <div className="about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ab voluptatum. Repudiandae minus culpa ipsam nostrum suscipit, modi voluptates corporis nulla harum odit veniam nisi exercitationem voluptatem ipsa perferendis dolorum!</p>
      </div>
    </div>
  )
}

export default MainPage;