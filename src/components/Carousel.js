import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/40/62/88/4062883604cf57652f90681b7ddc426e.jpg',
      alt: 'Slide 1',
      text: 'H + S = HappiShop',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/1e/60/71/1e60712965cee6f2c4a2a9e6367a569c.jpg',
      alt: 'Slide 2',
      text: "Dream big, shop bigger!"
,
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/54/9a/54/549a54ab29422b393dcf9e41274c7c64.jpg',
      alt: 'Slide 3',
      text: "Wear your personality!"
,
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/85/d5/2c/85d52c7ddfbf966d7361084256daf436.jpg',
      alt: 'Slide 4',
      text: '"Happiness delivered to your doorstep."',
    },{
      id: 5,
      image: 'https://i.pinimg.com/736x/62/d4/79/62d47950534f8f40eee92dde6f3dfb95.jpg',
      alt: 'Slide 5',
      text: '"Buy what makes you happy!"',
    },{
      id: 6,
      image: 'https://i.pinimg.com/736x/c8/05/3a/c8053a4cf9071d314b6ff4c637799ac9.jpg',
      alt: 'Slide 6',
      text: '"Style your life!"',
    },{
      id: 7,
      image: 'https://i.pinimg.com/736x/74/3c/77/743c77157a007e3b137a3dc55954ad26.jpg',
      alt: 'Slide 7',
      text: "Deals that make you smile!"
,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="carousel-item">
            <img src={slide.image} alt={slide.alt} className="carousel-image" />
            <div className="carousel-text">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
