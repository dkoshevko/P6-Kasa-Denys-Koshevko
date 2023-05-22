import '../styles/Thumb.css';

export default function Thumb({ housing }) {
    const { id, title, cover } = housing;

    return (
        <div className='housing-card' key={id}>
            <div className='card-overlay'></div>
            <img className='cover-image' src={cover} alt={title} />
            <h2 className='gallery-housing-title'>{title}</h2>
        </div>
    );
}