import illustration from "../images/illustration-intro.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" bg-curvy-light-mode dark:bg-curvy-dark-mode bg-contain bg-bottom bg-no-repeat"
    >
      {/* Hero Container */}
      <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
        <img src={illustration} alt="intro" className="mx-auto" />
        <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
          All your files in one location, assessible anywhere.
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one location. Access them
          whenever you need them, share and collaborate with friends and family,
          and co-workers.
        </p>
        <button className="bg-accentCyan w-52 rounded-full p-3 hover:scale-95">
          Get Started
        </button>
      </div>
    </section>
  );
};

export { HeroSection };
