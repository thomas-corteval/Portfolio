import { useState } from 'react';
import Header from '../../components/header';
import '../../variable.css';
import './projets.css';
import { Link } from 'react-router-dom'; 


function Projets() {
  const [filtre, setFiltre] = useState('');
  const [tri, setTri] = useState('desc'); 
  const [recherche, setRecherche] = useState('');

  const projets = [
    {
      nom: 'Refonte du site internet pour un conservatoire – Recueil et analyse des besoins du client',
      type: 'SAE',
      date: '2023',
      link: '/sae-01-05'
    },
    {
      nom: 'Élaboration et création d’une base de données – Analyse des besoins du client',
      type: 'SAE',
      date: '2023',
      link: '/sae-01-05'
    },
    {
      nom: 'Élaboration d’un exécutable de transformation d’image',
      type: 'SAE',
      date: '2023',
      link: '/sae-01-05'
    }
  ];

  const projetsFiltres = projets
    .filter(p => filtre === '' || p.type === filtre)
    .filter(p => p.nom.toLowerCase().includes(recherche.toLowerCase()))
    .sort((a, b) => {
      return tri === 'asc'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    });

  return (
    <>
      <div id='header'>
        <Header />
      </div>
      <div id='projets'>
        <h1>Mes Projets</h1>
        <div className="filtre-container">
          <label>Filtrer par type : </label>
          <select value={filtre} onChange={e => setFiltre(e.target.value)}>
            <option value="">Tous</option>
            <option value="SAE">SAE</option>
            <option value="Stage">Stage</option>
            <option value="Perso">Projet perso</option>
          </select>

          <label style={{ marginLeft: '1rem' }}>Trier par date : </label>
          <select value={tri} onChange={e => setTri(e.target.value)}>
            <option value="desc">Plus récent</option>
            <option value="asc">Plus ancien</option>
          </select>

          <input
            type="text"
            placeholder="Rechercher par nom..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            style={{ marginLeft: '1rem', padding: '0.5rem' }}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {projetsFiltres.map((projet, index) => (
              <tr key={index}>
                <td>{projet.nom}</td>
                <td>{projet.type}</td>
                <td>{projet.date}</td>
                <td><Link to={projet.link}>ici</Link></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
}

export default Projets;
