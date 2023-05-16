import { Link } from 'react-router-dom';
import logo from "../assets/logoBW.svg"
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className='logo-bw' />
            </Link>            
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}