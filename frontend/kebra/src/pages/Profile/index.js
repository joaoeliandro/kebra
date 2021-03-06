import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import './style.css';

import logoImg from '../../assets/ke_logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        const data = [{
            id: 1,
            titulo: "Primeiros passos de UX Design",
            descricao: "Curso focado em desenvolvimento de design com metodologia UX",
            skills: "Lean UX, Agile UX, Design Sprint, etc"
        },{
            id: 2,
            titulo: "Javascript para leigos",
            descricao: "Curso focado em ensino da Liguagem de programação Javascript",
            skills: "Lógica de Programação, Pensamento rápido, capacidade de trabalho em equipe, etc"
        },
        {
            id: 3,
            titulo: "Vendas e Marketing Digital",
            descricao: "Curso focado em ensino do marketing digital e processos de vendas do zero",
            skills: "SEO, Capacidade de venda B2B e B2C, Aprimoramento da oratória, etc"
        }];

        setIncidents(data);
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo&#40;a&#41;, {ongName}</span>

                <Link className="button" to="/eventos">Eventos</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#fff" />
                </button>
            </header>

            <h1>Cursos</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Curso:</strong>
                        <p>{incident.titulo}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.descricao}</p>

                        <strong>Diferenciais:</strong>
                        <p>{incident.skills}
                        </p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                        <Link className="back-link" to="/register">
                        Conferir curso
                        <FiLogIn size={16} color="#7b3a8e" />
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}