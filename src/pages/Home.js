import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../components/BannerImage';
import housingData from '../datas/logements.json';
import Thumb from '../components/Thumb';

export default function Home() {
    return (
        <main>
            <BannerImage>
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