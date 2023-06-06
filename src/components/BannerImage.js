import '../styles/main.css';

/**
* Composant d'image de bannière
* 
* Props :
* - children : Les éléments enfants à afficher dans la bannière
* - imageUrl : L'URL de l'image de la bannière
* - marginTop : La marge supérieure de la bannière
* - marginBottom : La marge inférieure de la bannière
* - height : La hauteur de la bannière
*/
export default function BannerImage({ children, imageUrl, marginTop, marginBottom, height }) {

    // Style de la bannière qui varie selon les pages
    const bannerStyle = {
        marginTop,
        marginBottom,
        height,
        backgroundImage: `url(${imageUrl})`,
    };
  
    return (
        <div className='banner__image' style={bannerStyle}>
        <div className='banner__image--overlay' />
        {children}
        </div>
    )
}