import '../styles/Thumb.css';

/**
* Composant carte de logement
*/
export default function Thumb({ housing }) {

    // Utilisation des propriétés de ./logements.json
    const { id, title, cover } = housing;

    return (
        <div className='housing__card' key={id}>
            <div className='housing__card--overlay'></div>
            <img className='housing__card--cover' src={cover} alt={title} />
            <h2 className='housing__card--title'>{title}</h2>
        </div>
    );
}