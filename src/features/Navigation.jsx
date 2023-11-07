import { ButtonToggle } from "../ui/ButtonToggle";
import { HamburgerButton } from "../ui/HamburgerButton";
import { MobileMenu } from "../ui/MobileMenu";

const Navigation = () => {
  return (
    <nav className="flex items-start justify-between md:flex-row md:items-center">
      {/* Dynamic Logo */}
      <div className="h-20 w-48 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode  md:mx-0"></div>
      {/* Menu */}
      <MobileMenu />

      {/* Hamburger Button */}
      <HamburgerButton />
      <div className="hidden items-center justify-center space-x-4 md:flex md:space-x-10">
        <a href="#features" className="hover:text-accentCyan">
          Features
        </a>

        <a href="#testimonials" className="hover:text-accentCyan">
          Testimonials
        </a>

        {/* Dark/Light */}
        <ButtonToggle />
      </div>
    </nav>
  );
};

export { Navigation };
