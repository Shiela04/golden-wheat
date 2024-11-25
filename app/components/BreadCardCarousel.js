'use client';

import { useState } from 'react';
import SourdoughBreadCard from './SourdoughBreadCard';
import WholeWheatCard from './WholeWheatCard';
import BaguetteCard from './BaguetteCard';
import CiabattaCard from './CiabattaCard';
import RyeBreadCard from './RyeBreadCard';
import MultigrainCard from './MultigrainCard';

export default function BreadCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    <SourdoughBreadCard key="sourdough" />,
    <WholeWheatCard key="wholewheat" />,
    <BaguetteCard key="baguette" />,
    <CiabattaCard key="ciabatta" />,
    <RyeBreadCard key="rye" />,
    <MultigrainCard key="multigrain" />,
  ];

  const cardsToShow = 4;

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsToShow);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - cardsToShow + cards.length) % cards.length
    );
  };

  return (
    <div className="relative my-4 overflow-hidden w-full">
      {/* {carousel wrapper} */}
      <div className="flex gap-2 transition-transform duration-300 ease-in-out">
        {/* {render teh cards} */}
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-100"
          >
            <div className="h-full flex flex-col justify-between">{card}</div>
          </div>
        ))}
      </div>

      {/* {Navigation Buttons} */}

      <button
        type="button"
        onClick={prevCard}
        aria-label="previous"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        &#8592;
      </button>

      <button
        type="button"
        onClick={nextCard}
        aria-label="next"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        &#8594;
      </button>
    </div>
  );
}
