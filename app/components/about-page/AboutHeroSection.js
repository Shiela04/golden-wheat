/* eslint-disable @next/next/no-img-element */
export default function AboutHeroSection() {
  return (
    <div>
      <div>
        <img src="../images/team.jpg" alt="team" />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between bg-card-beige text-black">
        <div className="flex flex-w-1/2 w-full flex-col justify-center items-center p-5 border-b border-black md:border-r lg:border-r xl:border-r">
          <h1 className="text-2xl xl:text-3xl font-extrabold pb-4">About Us</h1>
          <p className="p-3">
            At our bakery, we take pride in using the finest whole wheat flour
            to create fresh, hearty bread that is both nutritious and delicious.
            Our passion for baking is reflected in every loaf we craft, using
            traditional methods passed down through generations. We believe in
            the power of wholesome ingredients, bringing you a variety of breads
            that not only nourish the body but also delight the senses. Whether
            you are looking for a rustic loaf or a flavorful multigrain, our
            bakery is dedicated to delivering the highest quality bread, baked
            fresh daily with care and love.
          </p>
        </div>
        <div className="flex flex-w-1/2 w-full flex-col justify-between items-center p-5 border-b border-black md:border-l lg:border-l xl:border-l">
          <h1 className="text-2xl xl:text-3xl font-extrabold pb-4">
            Our Mission
          </h1>
          <p className="p-3">
            Our mission is to bring wholesome, freshly baked bread to every
            home, crafted with the finest whole wheat flour and natural
            ingredients. We are committed to creating breads that are not only
            delicious but also nourishing. By blending traditional baking
            techniques with innovation, we strive to craft products that support
            healthy living, enrich our community, and satisfy our customers’
            tastes. At our bakery, we believe in the power of quality,
            sustainability, and the joy of fresh, flavorful bread.
          </p>
        </div>
      </div>
    </div>
  );
}
