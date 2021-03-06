import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import pdfImg from '../images/pdf.png'

import '../styles/pages/passagens-cliente.css'
import '../styles/pages/header.css'

function ClientTicket() {
    return (
        <div id="passagens-cliente">
            {/*--------------- Top Bar ---------------*/}
            <div className="top-bar">
                <div className="header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="./Home-Cliente" className="pagina-inicial-link">Página Inicial</Link>
                        <Link to="/" className="logout-link">Encerrar Sessão</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
            <div className = "hello">
                <h1>Olá, Fulano!</h1>
            </div>
            <div className="info">
                <h1>Suas Passagens</h1>
            </div>
            {/*--------------- Cards ---------------*/}
            <div className="cards">
                <div className="space"></div>
                <div className="card">
                    <div className="passagem">
                        <div className="saida-chegada">
                            <h5>Saída:</h5>
                            <p>00/00/00</p>
                            <div className="space"></div>
                            <h5>Chegada:</h5>
                            <p>00/00/00</p>
                        </div>
                        <div className="horario">
                            <h5>Horário:</h5>
                            <p>00:00</p>
                            <div className="space"></div>
                            <h5>Horário:</h5>
                            <p>00:00</p>
                        </div>
                        <div className="cidade">
                            <h5>Origem:</h5>
                            <p>Cidade</p>
                            <div className="space"></div>
                            <h5>Destino:</h5>
                            <p>Cidade</p>
                        </div>
                        <div className="pdf">
                            <button><img src={pdfImg} alt="Gerar PDF" /></button>
                        </div>
                    </div>
                    <Link to="./Revisao-de-compra"><button>Ver mais</button></Link>
                </div>
            </div>
            <div className="botoes">
                <Link to="./Home-Cliente"><button>Continuar comprando</button></Link>
                <Link to="./Home-Cliente"><button id="botao-cancelar">Cancelar passagens</button></Link>
            </div>
            {/*--------------- Footer ---------------*/}
            <div className="footer">
                <p>Nossas redes sociais</p>
                <div className="icones">
                    <img src={instagramImg} alt="Instagram" className="instagram-logo" />
                    <img src={facebookImg} alt="Facebook" className="facebook-logo" />
                </div>
                <p className="hr"></p>
                <p className="space"></p>
                <p>© 2020 - Ziguen - Vendas de Passagens Fluviais</p>
            </div>
        </div>
    )
}

export default ClientTicket;