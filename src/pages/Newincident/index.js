import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' 

import './styles.css';

import logoImg from '../../assets/Logo.svg';

export default function Newincident() {
    return (
        <div className="New-incident-container">
        <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero" />

               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

               <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} color="#7159c1" />
                  voltar para home
               </Link>
            </section>

            <form>
               <input placeholder="Titulo do caso" />
               <textarea placeholder="Descrição" />
               <input placeholder="Valor em reais" />

               <button className="button" type="submit">Cadastro</button>
            </form>
        </div>
       </div>
    );
}