import '../styles/main.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

/**
* Composant header
* 
* <Link> consultables dans ./routes
*/
export default function Header() {

    // Utilisation du hook useLocation pour obtenir l'URL actuelle
    const location = useLocation();

    return (
        <header>

            {/* Logo cliquable redirigeant vers la page d'accueil */}
            <Link to='/accueil'>
                <img className='header__logo' src={logo} alt='Logo Kasa' />
            </Link>

            {/* Barre de navigation contenant des liens */}
            <nav className='navbar'>

                {/* Liens vers les pages "Accueil" et "A Propos" avec classe active si l'URL correspond */}
                <Link   to='/accueil' 
                        className={`navbar__link 
                        ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>
                    Accueil
                </Link>
                <Link   to='/a-propos' 
                        className={`navbar__link 
                        ${location.pathname === '/a-propos' ? 'navbar__link--active' : ''}`}>
                    À Propos
                </Link>
            </nav>
        </header>
    )
}