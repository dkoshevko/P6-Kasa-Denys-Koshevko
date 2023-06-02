import '../styles/Thumb.css';

export default function Thumb({ housing }) {
    const { id, title, cover } = housing;

    return (
        <div className='housing__card' key={id}>
            <div className='housing__card--overlay'></div>
            <img className='housing__card--cover' src={cover} alt={title} />
            <h2 className='housing__card--title'>{title}</h2>
        </div>
    );
}