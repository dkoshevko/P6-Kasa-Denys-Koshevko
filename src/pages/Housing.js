import '../styles/Housing.css';
import { useParams, Navigate } from 'react-router-dom';
import housingData from '../datas/logements.json';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/**
* Page Logement
*/
export default function Housing() {

    // Récupération du paramètre d'URL
    const { id } = useParams();

    // Recherche du logement correspondant à l'ID dans ./logements.json
    const housing = housingData.find((item) => item.id === id);

    // Si l'ID n'existe pas --> redirection vers la page 404
    if (!housing) {
        return <Navigate to="/*" />;
    }

    const 
    {   title, 
        pictures, 
        description, 
        host, 
        rating, 
        location, 
        equipments, 
        tags 
    } 
    = housing; 

    // Fonction pour générer la liste des équipements
    const equipmentsList = () => {
        return (
            <ul className='equipments-list'>
                {equipments.map((equipment) => (
                    <li className='equipment' key={equipment}>
                        {equipment}
                    </li>
                ))}
            </ul>
        );
    };

    // Fonction pour générer les étoiles de notation
    const ratingStars = () => {
        const stars = [];

        for (let i = 0; i < 5; i++) {

            // Détermine la classe CSS pour chaque étoile en fonction de la notation
            const starClass = i < rating ? 'star-active' : 'star-inactive';

            // Ajoute une étoile FontAwesome à la liste avec la classe appropriée
            stars.push(
                <FontAwesomeIcon 
                    icon={faStar} 
                    className={starClass} 
                    key={i} 
                />
            );
        };

        return stars;
    };
    
    return (
        <main>
            <Carousel images={pictures} />
            <div className='housing-info'>
                <div className='housing-info__text'>
                    <h1 className='housing-info__text--title font'>
                        {title}
                    </h1>
                    <h2 className='housing-info__text--location font'>
                        {location}
                    </h2>
                    <ul className='housing-info__text--tag-list'>
                        {tags.map((tag) => (
                            <li className='housing-info__text--tag-list__tag font' key={tag}>
                                {tag}
                            </li>
                            ))}
                    </ul>
                </div>

                <div className='housing-info__host'>
                    <figure className='housing-info__host--identity'>
                        <img 
                            className='housing-info__host--identity__photo' 
                            src={host.picture} 
                            alt={host.name}
                        />
                        <figcaption className='housing-info__host--identity__name font'>
                            {host.name}
                        </figcaption>
                    </figure>
                    <div className='housing-info__host--rating'>
                        {ratingStars()}
                    </div>
                </div>
            </div>

            <div className='housing-collapses'>
                <Collapse 
                    title='Description' 
                    text={description} 
                    customClasses='housing-collapses__collapse' 
                />
                <Collapse 
                    title='Équipements' 
                    text={equipmentsList()} 
                    customClasses='housing-collapses__collapse' 
                />
            </div>
        </main>
    );
}