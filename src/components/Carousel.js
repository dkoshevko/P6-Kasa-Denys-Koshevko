import '../styles/Carousel.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ images }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;

    const NextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const PreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel">
            {totalSlides > 1 && (
                <FontAwesomeIcon icon={faChevronLeft} onClick={PreviousSlide} className='prev-slide navigation' />
            )}

            <div className="carousel-images">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="active"
                />
            </div>
            
            {totalSlides > 1 && (
                <div className="slide-number">
                    {`${currentSlide + 1}/${totalSlides}`}
                </div>
            )}

            {totalSlides > 1 && (
                <FontAwesomeIcon icon={faChevronRight} onClick={NextSlide} className='next-slide navigation' />
            )}
        </div>
      );
      
}
