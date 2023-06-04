import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

/**
* Page 404 (Not Found)
*/
export default function NotFound() {
    return (
        <main>
            <div className='not-found'>
                <h1 className='not-found__title'>404</h1>
                <h2 className='not-found__message'>Oups! La page que<br className='break__line'></br> vous demandez n'existe pas.</h2>
                <Link to={`/`} className='not-found__back-home'>
                    Retourner sur la page d’accueil
                </Link>        
            </div>
        </main>
    )
}