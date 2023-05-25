import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../components/BannerImage';
import housingData from '../datas/logements.json';
import Thumb from '../components/Thumb';
import plage from '../assets/plage.jpg';

export default function Home() {
    return (
        <main>
            <BannerImage 
                imageUrl={plage}
                marginTop="60px" 
                marginBottom="40px"
                >
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            </BannerImage>
            <div className="gallery-home">
                {housingData.map((housing) => (
                    <Link to={`/logement/${housing.id}`} key={housing.id}>
                        <Thumb housing={housing} />
                    </Link>
                ))}
            </div>
        </main>
    )
}