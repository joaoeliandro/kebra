import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente!');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img style={{marginBottom: 20}} src={logoImg} alt="Be The Hero" />
                <span className="slogan">Kebre sua realidade, se desenvolva e evolua</span>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                        required
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                        <FiLogIn size={16} color="#7b3a8e" />
                    </Link>
                </form>
            </section>
        </div>
    );
}