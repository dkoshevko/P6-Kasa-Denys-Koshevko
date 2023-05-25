import '../styles/BannerImage.css';

export default function BannerImage({ children, imageUrl, marginTop, marginBottom }) {

    const bannerStyle = {
        marginTop,
        marginBottom,
        backgroundImage: `url(${imageUrl})`,
    };
  
    return (
        <div className='image-banner' style={bannerStyle}>
        <div className="banner-overlay" />
        {children}
        </div>
    )
}