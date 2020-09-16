import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/Logo.svg';
import  herosImg from '../../assets/Heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
            <h1>Faça seu Logon</h1>

            <input placeholder="Sua ID" />
            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#7159c1" />
                Nâo tenho cadastro
            </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes" />
    </div> 
 ); 
}
