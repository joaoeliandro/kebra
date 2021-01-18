import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [proposta, setProposta] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            proposta
        };

        try {
            

            history.push('/marketplace');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar nova vaga</h1>
                    <p>Descreva a vaga detalhadamente para encontrar o futuro da empresa.</p>

                    <Link className="back-link" to="/marketplace">
                        <FiArrowLeft size={16} color="#7b3a8e" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título da vaga"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Proposta"
                        value={proposta}
                        onChange={e => setProposta(e.target.value)}
                        required
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}