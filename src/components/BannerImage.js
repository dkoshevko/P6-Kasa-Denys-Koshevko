import '../styles/BannerImage.css';

export default function BannerImage({ children }) {
  
  return (
    <div className='image-banner'>
      <div className="banner-overlay" />
      {children}
    </div>
  )
}
