import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
* Composant de défilement en haut de page
*/
export default function ScrollToTop() {
    // Extraction de la propriété pathname (key) d'un objet
    const { pathname } = useLocation();

    // Défilement automatique en haut de page à chaque fois que le chemin d'accès (pathname) change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}
