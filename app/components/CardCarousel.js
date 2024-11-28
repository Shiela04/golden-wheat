"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      title: "Sourdough",
      description:
        "Tangy, chewy bread with a crisp crust, made through natural fermentation using wild yeast and lactic acid bacteria, offering a unique and flavorful taste.",
      imageSrc: "/images/sourdough-bread.jpg",
    },
    {
      id: 2,
      title: "Whole Wheat",
      description:
        "Hearty bread with a nutty flavor, made from whole wheat flour, preserving the bran, germ, and endosperm for natural nutrients and fiber.",
      imageSrc: "/images/whole-wheat-bread.jpg",
    },
    {
      id: 3,
      title: "Baguette",
      description:
        "Classic French bread with a crisp crust. Made with simple ingredients—flour, water, yeast, and salt—the dough undergoes a lengthy fermentation process.",
      imageSrc: "/images/baguette.jpg",
    },
    {
      id: 4,
      title: "Ciabatta",
      description:
        "Italian bread with a light, airy texture. The name ciabatta means slipper in Italian, referring to its shape resembling a worn-out slipper.",
      imageSrc: "/images/ciabatta.jpg",
    },
    {
      id: 5,
      title: "Rye Bread",
      description:
        "Dense, flavorful bread with a dark crust, made with rye flour, often combined with wheat flour for added structure and texture, offeringa robust taste.",
      imageSrc: "/images/rye-bread.jpg",
    },
    {
      id: 6,
      title: "Multigrain Bread",
      description:
        "Hearty bread made with a variety of grains, giving it a rich, nutty flavor and texture. Multigrain bread can vary in its composition, offering additional nutrients.",
      imageSrc: "/images/multigrain.jpg",
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
    <div className="relative justify-center w-full max-w-full p-4 overflow-hidden bg-black">
      {isClient && (
        <div className="justify-center px-8">
          <div
            className="flex justify-center gap-3 px-2 transition-transform duration-300"
            style={{
              transform: `translateX(-${transform * 100}%)`,
            }}
          >
            {displayedCards.map((card) => (
              <div
                key={card.id}
                className="justify-center w-full border border-white rounded-lg max-w-96 sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="h-full overflow-hidden rounded-lg bg-card-background">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="object-cover w-full h-40"
                  />
                  <div className="flex flex-col justify-between flex-1 p-2">
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="p-2 mt-4 text-black rounded-lg bg-card-beige">
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
            className="absolute left-0 p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2"
            disabled={false}
          >
            &lt;
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2"
            disabled={false}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
