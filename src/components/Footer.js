import '../styles/main.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logoBW.svg"

/**
* Composant footer
*/
export default function Footer() {
    return (
        <footer>
            {/* Lien vers la page "Accueil" */}
            <Link to='/'>
                <img src={logo} alt='Logo Kasa' className='footer__logo-bw' />
            </Link>            
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}