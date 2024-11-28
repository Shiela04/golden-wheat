export default function Socials() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="w-60 text-center text-2xl xl:text-3xl xl:w-80 font-extrabold p-4 my-4 bg-white text-black">
        Follow Us
      </h1>
      <div className="flex flex-row gap-3">
        <img
          src="../images/chai.jpg"
          alt="twitter"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
        />
        <img
          src="../images/chai.jpg"
          alt="facebook"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
        />
        <img
          src="../images/chai.jpg"
          alt="instagram"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
        />
        <img
          src="../images/chai.jpg"
          alt="youtube"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
        />
      </div>
    </div>
  );
}
