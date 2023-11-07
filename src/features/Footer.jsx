import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto px-5 py-10">
        {/* Flex Container */}
        <div className="flex flex-col items-start justify-between space-y-24 md:flex-row md:space-y-0">
          {/* Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src={phone} alt="phone" className="scale-10" />
              </div>
              <span className="font-bold">+2348165229396</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src={email} alt="email" className="scale-10" />
              </div>
              <span className="font-bold">Naijatask@gmail.com</span>
            </div>
          </div>

          {/* Menu */}

          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-40 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#">Contact us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-3 pb-10">
            <div>
              <a href="#">
                <img
                  src={facebook}
                  alt="social"
                  className="faicon rounded-full bg-darkBlue p-2"
                />
              </a>
            </div>

            <div>
              <a href="#">
                <img
                  src={twitter}
                  alt="social"
                  className="faicon rounded-full bg-darkBlue p-2"
                />
              </a>
            </div>

            <div>
              <a href="#">
                <img
                  src={instagram}
                  alt="social"
                  className="faicon rounded-full bg-darkBlue p-2"
                />
              </a>
            </div>
          </div>
          {/* Email & Phone */}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
