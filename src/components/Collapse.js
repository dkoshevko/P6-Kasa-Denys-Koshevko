import { useState } from 'react';
import '../styles/Collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/**
* Composant collapse
* 
* Props :
* - title : Titre du collapse
* - text : Contenu du collapse
* - customClasses : Ajout de classe pour modifier le CSS au besoin
*/
export default function Collapse({ title, text, customClasses }) {

    // État pour gérer l'ouverture/fermeture du collapse
    const [isOpen, setIsOpen] = useState(true);

    // Fonction pour changer l'état du collapse
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${customClasses}`}>
            <div className={`collapse__container ${customClasses}`}>
                <button className={`collapse__header ${customClasses}`} onClick={toggleCollapse}>
                    <h3 className={`collapse__title ${customClasses}`}>{title}</h3>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`collapse__icon ${isOpen ? '' : 'is-open'}`}
                    />
                </button>
                {!isOpen && 
                    <div className={`collapse__body ${customClasses} ${isOpen ? '' : 'is-open'}`}>
                        {text}
                    </div>
                }
            </div>
        </div>
    );
}