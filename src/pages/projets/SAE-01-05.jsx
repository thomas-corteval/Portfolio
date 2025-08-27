import Header from '../../components/header'
import '../../variable.css'
import './ProjetCss.css'
import Pre from '../../assets/icon/precedent.png'
import Sui from '../../assets/icon/suivant.png'
import Sae0105 from '../../assets/img/sae0105.png'
import Sae0104 from '../../assets/img/sae0104.png'
import Sae0101 from '../../assets/img/sae0101.png'
import { useState } from 'react';

function SAE0105() {
  
  const imagesCarrousel = [
    {
      image : Sae0105
    },
    {
      image : Sae0104
    },
    {
      image : Sae0101
    }
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const imageSuivante = () => {
    setImageIndex((imageIndex + 1) % imagesCarrousel.length);
  };

  const imagePrecedente = () => {
    setImageIndex((imageIndex - 1 + imagesCarrousel.length) % imagesCarrousel.length);
  };


  return (
    <>
      <Header/>
      <div id='projSAE0105'>
        <div id="presentation">
              <div id="context"> 
                    <h1>
                        SAE 01.05 : Refonte du site internet pour un conservatoire – 
                        Recueil et analyse des besoins du client
                    </h1>
                    <p>
                        Dans le cadre de mon premier semestre universitaire, le premier projet que j’ai dû
                        réaliser était en équipe de 5 personnes qui incarnait une équipe de développement fictive à
                        laquelle il était demandé de répondre à la demande du Conservatoire Massenet de
                        Saint-Étienne. Ce conservatoire souhaite créer un site internet pour promouvoir ses activités,
                        présenter ses enseignements, événements, ainsi que les informations sur le lieu et les activités
                        associées. Le conservatoire n'avait qu'une page informative sur le site de la ville. Notre rôle était
                        de bien comprendre les attentes du client et les enjeux du projet pour orienter le développement
                        de manière adéquate.
                    </p>
                </div>
                {imagesCarrousel.length > 0 && (
                  <div className="carrousel">
                    <img src={Pre} className='btn' onClick={imagePrecedente}/>
                    <img src={imagesCarrousel[0].image} id='img'/>

                    <img src={Sui} className='btn' onClick={imageSuivante}/>
                  </div>
                )}

            </div>
            <div id="contenu">
                <div id="partieA">
                    <h2>
                        Différente étape du projet :
                    </h2>
                    <ul>
                        <li>Lire l'ensemble des documents fournis par le client fictif.</li>
                        <li>Présenter de manière claire, concise et vulgarisée le contexte, les attentes et les exigences du client.</li>
                        <li>
                            Créer des personas correspondant à la cible principale et aux cibles secondaires. (Les
                            caractéristiques des cibles tertiaires seront présentées de manière synthétique sans faire l’objet
                            d’un persona).
                        </li>
                        <li>Extraire les attentes des utilisateurs finaux.</li>
                        <li>Effectuer une veille concurrentielle en analysant deux sites de Conservatoire de différente ville :</li>
                        <li>
                            Réaliser un tri de carte pour présenter les contenus/fonctionnalités attendus sur la page
                            d'accueil, dans le header et le footer, ainsi que la hiérarchisation de l'information de la barre de
                            navigation.
                        </li>
                        <li>Traduire le recueil des besoins en sous-livrables.</li>
                        <li>Un document PDF regroupant les axes spécifiés précédemment.</li>
                        <li>Un support visuel pour notre présentation orale</li>
                        <li>Préparation de notre passage orale devant un jury</li>
                        <li>
                            Ce qu'il devait être présent dans notre présentation :
                            <ul>
                                <li>Présentation de votre agence et de votre équipe</li>
                                <li>Contextualisation du projet du client</li>
                                <li>Principales attentes et exigences issues du cahier de charges</li>
                                <li>Cibles principales, secondaires sous la forme de persona</li>
                                <li>Veille concurrentielle et impacts sur le projet</li>
                            </ul>
                        </li>
                        <li>Choix d'arborescence</li>
                    </ul>
                </div>
                <div id="partieB">
                    <div id="missions">
                        <h2>
                            Mission que j’ai réalisé pendant ce projet :
                        </h2>
                        <ul>
                            <li>
                                Créer des personas correspondant à la cible principale et aux cibles secondaires. Ainsi que
                                les caractéristiques des cibles tertiaires présentées de manière synthétique sans faire l’objet
                                d’un persona.
                            </li>                            
                            <li>Extraire les attentes des utilisateurs finaux.</li>
                            <li>
                                Réaliser un tri de carte pour présenter les contenus et les fonctionnalités attendus sur la
                                page d'accueil, dans le header et le footer, ainsi que la hiérarchisation de l'information de la
                                barre de navigation.
                            </li>
                            <li>
                                Création d’une partie du support visuel pour notre présentation orale que nous avons fait
                                pour présenter ce sujet à un jury.  
                            </li>
                        </ul>
                    </div>
                    <div div id="competance">
                        <h2>
                            L’ensemble des compétence que j’ai dû mobiliser durant ce projet :
                        </h2>
                        <ul>
                            <li>
                                Développement de personas
                                <ul>
                                    <li>
                                        En créant des personas pour représenter nos utilisateurs cibles, en synthétisant les
                                        caractéristiques et attentes des différents profils.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Analyse des besoins utilisateurs
                                <ul>
                                    <li>En analysant et en retranscrivant les attentes spécifiques des utilisateurs finaux.</li>
                                </ul>
                            </li>
                            <li>
                                Architecture de l'information
                                <ul>
                                    <li>
                                        En réalisant un tri de cartes pour organiser les contenus et fonctionnalités attendus,
                                        ainsi que pour hiérarchiser les informations de la barre de navigation.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Communication visuelle et orale
                                <ul>
                                    <li>
                                        En contribuant à la création du support visuel pour notre présentation orale devant le
                                        jury et en y participant activement.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Travail d'équipe
                                <ul>
                                    <li>En travaillant en collaboration avec mes camarades afin de mener ce projet à bien.</li>
                                </ul>
                            </li>

                        </ul>
                       
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default SAE0105
