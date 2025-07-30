import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 px-4  border border-solid dark:border-none bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-dark-lite dark:to-dark-light dark:text-white-deep">
      <div className="w-11/12 flex-col lg:flex-row flex items-center justify-between mx-auto space-y-4">
        {/* Branding */}
        <div>
          <p className="text-dark-deep font-semibold text-3xl dark:text-white-deep">
            <span className="text-primary1">
              <span>&lt;</span>K
            </span>
            otiralla Vigneshwari
            <span className="text-primary2">/&gt;</span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex max-sm:flex-col justify-center items-center space-x-5 max-sm:space-y-5">
          {/* Mobile Email */}
          <a
            className="lg:hidden"
            href="mailto:kurbavigneshwari@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">
              kurbavigneshwari@gmail.com
            </p>
          </a>

          {/* Desktop Email */}
          <a
            className="hidden lg:block"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=kurbavigneshwari@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">
              kurbavigneshwari@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a href="tel:+917989772865">
            <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">
              +917989772865
            </p>
          </a>

          {/* Social Icons */}
          <div className="flex space-x-2 mt-2 social-icon mb-3">
            <ul className="flex gap-3 items-center justify-center lg:justify-start">
              <li>
                <a
                  href="https://github.com/Kotirallavigneshwari30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kothiralla-vigneshwari-482a6126b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917989772865"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a
                  className="lg:hidden"
                  href="mailto:kurbavigneshwari@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail size={30} className="hero-icon lang" />
                </a>
              </li>
              <li>
                <a
                  className="hidden lg:block"
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=kurbavigneshwari@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail size={30} className="hero-icon lang" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
