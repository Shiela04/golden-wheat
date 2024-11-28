"use client";

import { useState } from "react";
import WishlistItem from "../components/WishlistItem";

export default function Wishlist() {
  const initialItems = [
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
        "Classic French bread with a crisp, golden crust. Made with simple, quality ingredients—flour, water, yeast, and salt—the dough undergoes a lengthy fermentation process.",
      imageSrc: "images/baguette.jpg",
    },
    {
      id: 4,
      title: "Ciabatta",
      description:
        "Italian bread with a light, airy texture, known for its rustic shape. The name ciabatta translates to 'slipper' in Italian, referring to its unique, slightly flattened form.",
      imageSrc: "images/ciabatta.jpg",
    },
    {
      id: 5,
      title: "Rye Bread",
      description:
        "Dense, flavorful bread with a dark crust, made with rye flour and often combined with wheat flour for enhanced texture, offering a bold, rich, and robust, earthy taste.",
      imageSrc: "images/rye-bread.jpg",
    },
    {
      id: 6,
      title: "Multigrain Bread",
      description:
        "Hearty bread made with a variety of grains, giving it a rich, nutty flavor and texture. Multigrain bread can vary in its composition, offering additional nutrients and health benefits.",
      imageSrc: "images/multigrain.jpg",
    },
    {
      id: 7,
      title: "Almond Croissant",
      description:
        "A rich, buttery pastry with a delicate almond filling. Made from croissant dough, almond croissants are filled with almond cream and topped with sliced almonds and powdered sugar. Baked to a golden, flaky texture, they offer a perfect balance of sweetness and nuttiness, ideal for breakfast or a special treat.",
      imageSrc: "images/almond-croissant.jpg",
    },
    {
      id: 8,
      title: "Brioche Bun",
      description:
        "A rich, buttery bun with a soft, slightly sweet flavor. Made from flour, yeast, butter, eggs, and sugar, brioche buns are baked to a golden, tender finish. Their light, airy texture and subtle sweetness make them the perfect complement to burgers or sandwiches.",
      imageSrc: "images/brioche-bun.jpg",
    },
    {
      id: 9,
      title: "Chelsea Bun",
      description:
        "A sweet, spiced pastry with a soft, pillowy texture. Made from yeasted dough, Chelsea buns are rolled with currants, cinnamon, and sugar, then baked to a golden brown. Glazed with syrup, they offer a warm, aromatic treat perfect for tea time or a sweet snack.",
      imageSrc: "images/chelsea-bun.jpg",
    },
    {
      id: 10,
      title: "Cinnamon Buns",
      description:
        "A warm, sweet pastry with a soft, pillowy texture. Made from yeast dough, cinnamon buns are rolled with a cinnamon-sugar filling and baked until golden. Often topped with a creamy glaze, they are a comforting, aromatic treat perfect for breakfast or dessert.",
      imageSrc: "images/cinnamon-buns.jpg",
    },
    {
      id: 11,
      title: "Croissant",
      description:
        "A classic French pastry with a golden, flaky crust. Made with layers of butter and dough, the dough is repeatedly folded and rolled to create its signature light, airy texture. Often enjoyed fresh for breakfast, croissants are a delicious blend of simplicity and craftsmanship.",
      imageSrc: "images/croissant.jpg",
    },
    {
      id: 12,
      title: "Danish Pastry",
      description:
        "A sweet, buttery pastry with a light, flaky texture. Made from laminated dough, Danish pastries are often filled with fruit, cream cheese, or almond paste. Baked to a golden perfection, they offer a rich, indulgent treat thats perfect for breakfast or dessert.",
      imageSrc: "images/danish-pastry.jpg",
    },
  ];

  const [items, setItems] = useState(initialItems);

  const handleItemRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>WishList</h1>
      <div>
        {items.map((item) => (
          <WishlistItem key={item.id} item={item} onRemove={handleItemRemove} />
        ))}
      </div>
    </div>
  );
}
