/* eslint-disable react/prop-types */
import quotes from "../images/bg-quotes.png";
import { testimonial } from "../data/testimonialData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      {/* Testimonial container */}
      <div className="container mx-auto px-6 pb-80 pt-12 md:pb-96">
        {/* Boxes Container */}

        <div
          className="relative flex w-full flex-col space-x-12 space-y-6
         md:flex-row md:space-y-0"
        >
          {/* Quotes Image */}
          <img
            src={quotes}
            alt="quote"
            className="absolute -top-2 left-1 w-10 md:-top-16 md:w-20"
          />

          {/* Box 1 */}
          {testimonial.map((item, index) => {
            return <Testimonial key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ image, testimonial, name, job }) => {
  return (
    <div
      className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3
           md:w-1/3"
    >
      <p className="text-sm leading-5 md:text-lg">{testimonial}</p>

      {/* Customer Info */}
      <div className="flex space-x-4">
        <img src={image} alt={name} className="h-10 w-10 rounded-full" />
        <div>
          <h5 className="text-sm font-semibold">{name}</h5>
          <p className="textxs font-extralight">{job}</p>
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
