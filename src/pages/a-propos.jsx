import Header from '../components/header'
import '../variable.css'
import './a-propos.css'

function A_propos() {
  return (
    <>
      <Header/>
      <div id='a-propos'>
        <h1>À propos de moi</h1>

        <div className='section' id='presentation'>
          <p>
            Technicien supérieur en informatique, je suis actuellement en 2<sup>ème</sup> année de BUT informatique, option graphique. 
            Mon ambition est de devenir ingénieur en Big Data ou en Intelligence Artificielle.
          </p>
        </div>

        <div className='section' id='competances'>
          <h2>Compétences</h2>
          <ul>
            <li><strong>Langages & programmation :</strong> C++, Qt, PHP, SQL, JavaScript, HTML, CSS</li>
            <li><strong>Travail en équipe :</strong> méthode AGILE, projets de groupe (3 à 8 personnes)</li>
            <li><strong>Logiciels :</strong> Visual Studio, VS Code, Visual Paradigm, XAMPP, PhpMyAdmin</li>
          </ul>
        </div>

        <div className='section' id='experiences'>
          <h2>Expériences et projets</h2>
          <ul>
            <li>
              <strong>Jeu vidéo sur le racisme</strong> (Jan - Juin 2024, IUT Le Puy-en-Velay)<br />
              Développement d’un jeu dans le cadre d’une exposition sur Martin Luther King. 
              <em>Responsable graphisme & développement partiel.</em>
            </li>
            <li>
              <strong>CVL – Lycée Pierre Joël Bonté</strong> (Avril 2021)<br />
              Organisation d’un cross solidaire (contact mairie, sponsors, logistique).
            </li>
            <li>
              <strong>Employé de rayon – Intermarché</strong> (Avril 2021)<br />
              Mise en rayon, étiquetage, vérification et nettoyage des produits.
            </li>
          </ul>
        </div>

        <div className='section' id='formation'>
          <h2>Formation</h2>
          <ul>
            <li>BUT Informatique – IUT Clermont Auvergne (2023–2026)</li>
            <li>Baccalauréat Général – Spé Info & Mathématiques (2023)</li>
          </ul>
        </div>

        <div className='section' id='loisir'>
          <h2>Centres d’intérêt</h2>
          <ul>
            <li><strong>Sports collectifs :</strong> Volley (compétition), Basket</li>
            <li><strong>Dessin :</strong> portraits, paysages (style réaliste/cartoon), 3D sur Blender</li>
            <li><strong>Lecture :</strong> romans de fantasy, science-fiction, chevalerie, mangas</li>
          </ul>
        </div>

        <div id="cv-download" className='section'>
          
            <a href="CV_Thomas_Corteval.pdf" download="CV_Thomas_Corteval.pdf" className="download-button">
              <button>Télécharger mon CV</button>
            </a>
          
        </div>
      </div>
    </>
  )
}

export default A_propos
