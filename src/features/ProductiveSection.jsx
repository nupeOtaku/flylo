import productive from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

const ProductiveSection = () => {
  return (
    <section id="productive" className="dark:bg-darkBlue bg-white">
      {/* Productive Container */}
      <div className="container mx-auto flex flex-col items-center px-6 pb-32 pt-24 text-center md:flex-row md:space-x-16 xl:px-10 2xl:px-16">
        {/* Image */}

        <div className="md:w-1/2">
          <img src={productive} alt="stay productive icon" className="mb-10" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5 text-left">
            <h4 className="md:min-w-md text-xl font-bold md:text-4xl">
              Stay Productive, wherever you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          {/* Link */}
          <div className="mt-4 block">
            <a href="#" className="border-accentCyan text-accentCyan border-b">
              See how Fylo works
              <img src={arrow} alt="arrow" className="inline pb-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductiveSection };
