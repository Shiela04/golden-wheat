/* eslint-disable @next/next/no-img-element */
export default function TeamMembers() {
  return (
    <div className="flex flex-col gap-8 py-8 justify-center items-center">
      <h1 className="w-80 text-center text-2xl xl:text-3xl xl:w-96 font-extrabold p-6 bg-white text-black">
        Meet The Team
      </h1>

      {/* Etha's card */}
      <div className="flex flex-col justify-center items-center pt-4">
        {/* image */}
        <img
          src="../images/ethan.jpg"
          alt="ethan"
          className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full justify-center"
        ></img>
        {/* Name */}
        <h2 className="text-center text-2xl font-bold md:text-3xl md:font-extrabold lg:text-4xl p-4">
          Ethan Dam
        </h2>
        {/* Description */}
        <p className="w-80 text-base h-auto text-center text-black md:w-96 md:text-lg lg:w-96 lg:text-lg p-4 bg-card-beige rounded-xl">
          Ethan, our CEO and founder, is the visionary behind our wheat bakery.
          With a passion for quality and a deep love for baking, he established
          the company with the mission to bring wholesome, fresh, and nutritious
          wheat-based products to our community. Under his leadership, we
          continue to innovate while staying true to our roots of crafting
          delicious and healthy bread for every family.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-row justify-center gap-8 lg:gap-20 xl:gap-48">
        {/* Chai's card */}
        <div className="flex flex-col h-full justify-center items-center pt-4">
          {/* image */}
          <img
            src="../images/chai.jpg"
            alt="chai"
            className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full justify-center"
          ></img>
          {/* Name */}
          <h2 className="text-center text-2xl font-bold md:text-3xl md:font-extrabold lg:text-4xl p-4">
            Chaitalkumar Trivedi
          </h2>
          {/* Description */}
          <p className="w-80 text-base h-auto text-center text-black md:w-96 md:text-lg lg:w-96 lg:text-lg p-4 bg-card-beige rounded-xl">
            Chai, our talented Pastry Chef, brings his expertise and love for
            baking to every creation. Specializing in wheat-based pastries,
            Chai’s attention to detail and commitment to quality ensure each
            treat is crafted to perfection. His passion for creating delicious,
            finely textured pastries makes every bite a delightful experience,
            reflecting his dedication to excellence and the art of baking.
          </p>
        </div>

        {/* Aashita's card */}
        <div className="flex flex-col h-full justify-center items-center pt-4">
          {/* image */}
          <img
            src="../images/aashita.jpg"
            alt="aashita"
            className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full justify-center"
          ></img>
          {/* Name */}
          <h2 className="text-center text-2xl font-bold md:text-3xl md:font-extrabold lg:text-4xl p-4">
            Aashita Aashita
          </h2>
          {/* Description */}
          <p className="w-80 text-base h-auto text-center text-black md:w-96 md:text-lg lg:w-96 lg:text-lg p-4 bg-card-beige rounded-xl">
            Aashita, one of our talented chefs, brings her culinary expertise
            and creativity to every dish she prepares. With a focus on using the
            finest wheat ingredients, Aashita’s passion for food shines through
            in every loaf of bread and baked good. Her commitment to crafting
            wholesome, flavorful creations ensures that our bakery remains a
            place where quality and taste are always at the forefront.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-row justify-center gap-8 lg:gap-20 xl:gap-48">
        {/* Mo's card */}
        <div className="flex flex-col justify-center items-center pt-4">
          {/* image */}
          <img
            src="../images/mo.jpg"
            alt="mo"
            className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full justify-center"
          ></img>
          {/* Name */}
          <h2 className="text-center text-2xl font-bold md:text-3xl md:font-extrabold lg:text-4xl p-4">
            Moksham Sharma
          </h2>
          {/* Description */}
          <p className="w-80 text-base h-auto text-center text-black md:w-96 md:text-lg lg:w-96 lg:text-lg p-4 bg-card-beige rounded-xl">
            Moksham, one of our skilled editors, plays a key role in ensuring
            that every piece of content we share reflects our bakery’s values
            and quality. With an eye for detail and a passion for storytelling,
            Moksham carefully crafts the messaging behind our brand. His
            dedication to excellence helps communicate our mission of providing
            wholesome, delicious wheat-based products to our community.
          </p>
        </div>

        {/* Shiela's card */}
        <div className="flex flex-col justify-center items-center pt-4">
          {/* image */}
          <img
            src="../images/shiela.jpg"
            alt="shiela"
            className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full justify-center"
          ></img>
          {/* Name */}
          <h2 className="text-center text-2xl font-bold md:text-3xl md:font-extrabold lg:text-4xl p-4">
            Shiela Daguio
          </h2>
          {/* Description */}
          <p className="w-80 text-base h-auto text-center text-black md:w-96 md:text-lg lg:w-96 lg:text-lg p-4 bg-card-beige rounded-xl">
            Shiela, our talented editor, is the voice behind many of our brand’s
            stories. With a keen eye for detail and a strong passion for
            writing, Shiela ensures that every piece of content resonates with
            our audience and highlights the quality and care behind our
            wheat-based products. Her expertise in crafting engaging narratives
            helps us connect with our customers and share the heart of our
            bakery.
          </p>
        </div>
      </div>
    </div>
  );
}
