/* eslint-disable react/prop-types */
import { features } from "../data/featuresData";

const FeatureSection = () => {
  return (
    <section id="features" className="bg-gray-50 pt-6 dark:bg-darkBlue1">
      {/* Features Container */}
      <div className="container mx-auto px-6 pb-32">
        {/*Row */}
        <div className="flex flex-col place-items-center items-center justify-center gap-4 space-y-12 text-center md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {/* Item */}
          {features.map((item, index) => {
            return <Items {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Items = ({ image, title, text }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="mb-6 flex h-24 items-center justify-center">
        <img src={image} alt="access icon" />
      </div>

      <h3 className="text-xl font-bold">{title} </h3>

      <p className="max-w-md">{text}</p>
    </div>
  );
};

export { FeatureSection };
