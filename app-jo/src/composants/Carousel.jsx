import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const imageList = [
  '/or1.webp',
  '/or2.webp',
  '/all-medals.webp',
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {imageList.map((src, index) => (
          <div key={src} className={`${index === activeIndex ? 'block' : 'hidden'} duration-700 ease-in-out`}>
            <img src={src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {imageList.map((_, index) => (
          <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={index === activeIndex ? 'true' : 'false'} aria-label={`Slide ${index + 1}`} onClick={() => setActiveIndex(index)}></button>
        ))}
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrev}>
  <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-white" />
  <span className="sr-only">Previous</span>
</button>
<button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNext}>
  <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-white" />
  <span className="sr-only">Next</span>
</button>
    </div>
  );
};

export default Carousel;
