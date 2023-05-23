import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main>
            <h1 className='fof'>404</h1>
            <h2 className='fof-message'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to={`/`} className='back-home'>
            Retourner sur la page d’accueil
            </Link>        
        </main>
    )
}