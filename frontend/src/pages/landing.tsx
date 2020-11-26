import React from 'react'
import { Link } from 'react-router-dom'

import banner from '../images/BannerTagmar.png'
import '../styles/pages/landing.css'

function Landing() {

    return (
        <>
            <div id="container">
                <div className="content">
                    <div className="inicialTitle">
                        <img src={banner} alt="Tagmar RPG" />
                    </div>

                    <div className="contentCards">

                        <div className="card">
                            <h1 className="cardTitle">Rolando Dados</h1>
                            <p>Rolagem de dados para o Mestre do Jogo.</p>
                            <Link to='/dice'  className='buttonCard'>
                                Dados
                            </Link>

                        </div>

                        <div className="card">
                            <h1 className="cardTitle">Personagens</h1>
                            <p>Criação de personagens para Mestres de Jogo e Jogadores</p>
                            <button className='buttonCard'>Personagens</button>

                        </div>

                        <div className="card">
                            <h1 className="cardTitle">Combates</h1>
                            <p>Automatização dos combates com cálculos automáticos de danos e demias fatores.</p>
                            <Link to='/fight'>
                                <button className='buttonCard'>Combate</button>
                            </Link>
                        </div>

                        <div className="card">
                            <h1 className="cardTitle">PNJ</h1>
                            <p>Criação semi-automática de personagens não jogadores, rápida e fácil.</p>
                            <button className='buttonCard'>PNJ</button>
                        </div>
                    
                    </div>

                    <div className="footercard">
                        <h1 className="cardTitle"></h1>

                    </div>

                    <footer>
                        <small>Criado por Claudiney Martins</small>

                    </footer>
                </div>
            </div>
        </>

    )
}

export default Landing