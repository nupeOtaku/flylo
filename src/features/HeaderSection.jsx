import { Navigation } from "./Navigation";

const HeaderSection = () => {
  return (
    <header className="container mx-auto mt-10 h-40 px-6 text-center md:h-20">
      {/* Navigation */}
      <Navigation />
    </header>
  );
};

export { HeaderSection };
