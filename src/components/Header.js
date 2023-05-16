import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

export default function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" />
            </Link>            
            <nav className="nav">
                <Link   to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}>
                    Accueil
                </Link>
                <Link to="/a-propos" className={`nav-link ${location.pathname === '/a-propos' ? 'active-link' : ''}`}>
                    À Propos
                </Link>
            </nav>
        </div>
    )
}