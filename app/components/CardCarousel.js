"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      title: "Sourdough",
      description:
        "Tangy, chewy bread with a crisp crust, made using natural fermentation with wild yeast and lactic acid bacteria, creating a distinct, complex, and flavorful taste.",
      imageSrc: "images/sourdough-bread.jpg",
    },
    {
      id: 2,
      title: "Whole Wheat",
      description:
        "Hearty bread with a nutty flavor, made from whole wheat flour, retaining the bran, germ, and endosperm for added nutrients, fiber, and a rich, wholesome texture.",
      imageSrc: "images/whole-wheat-bread.jpg",
    },
    {
      id: 3,
      title: "Baguette",
      description:
        "Classic French bread with a crisp crust. Made with simple ingredients—flour, water, yeast, and salt—the dough undergoes a lengthy fermentation process.",
      imageSrc: "images/baguette.jpg",
    },
    {
      id: 4,
      title: "Ciabatta",
      description:
        "Italian bread with a light, airy texture. The name ciabatta means slipper in Italian, referring to its shape resembling a worn-out slipper.",
      imageSrc: "images/ciabatta.jpg",
    },
    {
      id: 5,
      title: "Rye Bread",
      description:
        "Dense, flavorful bread with a dark crust, made with rye flour, often combined with wheat flour for added structure and texture, offeringa robust taste.",
      imageSrc: "images/rye-bread.jpg",
    },
    {
      id: 6,
      title: "Multigrain Bread",
      description:
        "Hearty bread made with a variety of grains, giving it a rich, nutty flavor and texture. Multigrain bread can vary in its composition, offering additional nutrients.",
      imageSrc: "images/multigrain.jpg",
    },
  ];

  // state to track current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const totalCards = cards.length;

  //   check if we're in a browser environment
  useEffect(() => {
    setIsClient(true);
    const updateCardsPerView = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setCardsPerView(4);
      } else if (width >= 768) {
        setCardsPerView(3);
      } else if (width >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalCards - cardsPerView);
    }
  };

  const goNext = () => {
    if (currentIndex < totalCards - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const displayedCards = cards.slice(currentIndex, currentIndex + cardsPerView);

  const transform = -(currentIndex * 100) / totalCards;

  return (
    <div className="justify-center relative p-4 w-full overflow-hidden bg-black">
      {isClient && (
        <div className="px-8 justify-center">
          <div
            className="flex gap-3 justify-center transition-transform duration-300 px-2"
            style={{
              transform: `translateX(-${transform * 100}%)`,
            }}
          >
            {displayedCards.map((card) => (
              <div
                key={card.id}
                className="justify-center w-full max-w-96 sm:w-1/2 md:w-1/3 lg:w-1/4 border border-white rounded-lg"
              >
                <div className="bg-card-background rounded-lg h-full overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-2 flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="bg-card-beige p-2 mt-4 rounded-lg text-black">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
            disabled={false}
          >
            &lt;
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
            disabled={false}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
