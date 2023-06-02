import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../components/BannerImage';
import housingData from '../datas/logements.json';
import Thumb from '../components/Thumb';
import plage from '../assets/plage.jpg';

/**
* Page d'accueil
* 
* Utilisation des props de ./Banner.js
*/
export default function Home() {
    return (
        <main>
            <BannerImage 
                imageUrl={plage}
                marginTop='60px' 
                marginBottom='40px'
                >
                <h1 className='banner__title'>Chez vous,<br className='break__line' /> partout et ailleurs</h1>
            </BannerImage>

            <div className='home__gallery'>
                {/* Parcours de des données pour afficher les logements */}
                {housingData.map((housing) => (
                    <Link to={`/logement/${housing.id}`} key={housing.id}>
                        <Thumb housing={housing} />
                    </Link>
                ))}
            </div>
        </main>
    )
}