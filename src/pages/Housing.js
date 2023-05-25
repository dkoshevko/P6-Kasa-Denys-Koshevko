import '../styles/Housing.css';
import { useParams } from 'react-router-dom';
import housingData from '../datas/logements.json';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Housing() {
    const { id } = useParams();
    const housing = housingData.find((item) => item.id === id);
        
    const { title, pictures, description, host, rating, location, equipments, tags } = housing; 

    const equipmentsList = () => {
        return (
          <ul className='equipments-list'>
            {equipments.map((equipment) => (
                <li className='equipment' key={equipment}>{equipment}</li>
            ))}
          </ul>
        );
    };

    const ratingStars = () => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            const starClass = i < rating ? 'star-active' : 'star-inactive';

            stars.push(
                <FontAwesomeIcon icon={faStar} className={starClass} key={i} />
            );
        };

        return stars;
    };
    
    return (
      <main>
        <Carousel images={pictures} />
        <div className='housing-info-container'>
            <div className='housing-text-info'>
                <h1 className='housing-title font'>{title}</h1>
                <h2 className='housing-location font'>{location}</h2>
                <ul className='housing-tag-list'>
                    {tags.map((tag) => (
                        <li className='housing-tag font' key={tag}>{tag}</li>
                        ))}
                </ul>
            </div>
            <div className='housing-host-container'>
                <figure className='host-info'>
                    <img className='host-photo' src={host.picture} alt={host.name}></img>
                    <figcaption className='host-name font'>{host.name}</figcaption>
                </figure>
                <div className='housing-rating'>{ratingStars()}</div>
            </div>
        </div>
        <div className='housing-collapses'>
            <Collapse title='Description' text={description} />
            <Collapse title='Équipements' text={equipmentsList()} />
        </div>
      </main>
    );
}