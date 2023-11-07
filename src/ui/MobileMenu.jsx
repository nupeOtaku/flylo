import { useMenuContext } from "../context/MenuContext";
import { ButtonToggle } from "./ButtonToggle";

const MobileMenu = () => {
  const { btnOpen } = useMenuContext();

  return (
    <div
      id="menu"
      className={`z-100 absolute left-6 right-6 top-24 block rounded-lg bg-darkBlue1 p-6 dark:bg-white  lg:hidden  ${
        !btnOpen ? "slide close" : "slide open"
      } `}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white dark:text-darkBlue">
        <a href="#features" className="w-full text-center" id="features">
          Features
        </a>
        <a
          href="#testimonials"
          className="w-full text-center"
          id="testimonials"
        >
          Testimonials
        </a>

        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-t border-gray-50 bg-white dark:bg-darkBlue">
          <ButtonToggle />
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
