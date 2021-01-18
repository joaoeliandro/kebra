import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiLogIn, FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './style.css';

import logoImg from '../../assets/ke_logo.svg';

export default function Eventos() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        const data = [{
            id: 1,
            titulo: "Gabriella Santiago Linda demais",
            descricao: "UX Design básico, UX Design avançado, Primeiro negócio com UX Design",
            skills: "Moro na periferia de Porto Alegre, filha de mãe solteira e faxineira, nunca desistir dos estudos é o que mais me apego."
        },{
            id: 2,
            titulo: "Gabriella Santiago Linda demais",
            descricao: "UX Design básico, UX Design avançado, Primeiro negócio com UX Design",
            skills: "Moro na periferia de Porto Alegre, filha de mãe solteira e faxineira, nunca desistir dos estudos é o que mais me apego."
        },
        {
            id: 3,
            titulo: "Gabriella Santiago Linda demais",
            descricao: "UX Design básico, UX Design avançado, Primeiro negócio com UX Design",
            skills: "Moro na periferia de Porto Alegre, filha de mãe solteira e faxineira, nunca desistir dos estudos é o que mais me apego."
        },
        {
            id: 3,
            titulo: "Gabriella Santiago Linda demais",
            descricao: "UX Design básico, UX Design avançado, Primeiro negócio com UX Design",
            skills: "Moro na periferia de Porto Alegre, filha de mãe solteira e faxineira, nunca desistir dos estudos é o que mais me apego."
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

        history.push('/profile');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo&#40;a&#41;, {ongName}</span>

                <Link className="button" to="/profile">
                    <FiArrowLeft size={20} color="#fff"></FiArrowLeft>
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiArrowLeft size={18} color="#fff" />
                </button>
            </header>

            <h1>Perfis</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Nome:</strong>
                        <p>{incident.titulo}</p>

                        <strong>Cursos:</strong>
                        <p>{incident.descricao}</p>

                        <strong>Sobre:</strong>
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