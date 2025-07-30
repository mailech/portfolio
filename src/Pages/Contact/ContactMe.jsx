import ParticlesUI from "@/Animation/ParticlesUI";
import { Heading } from "@/Components/Common/Heading";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";
import ContactForm from "../../Components/ContactMe/ContactForm";

const ContactMe = () => {
  return (
    <section
      className={`flex flex-col w-11/12 mx-auto items-center justify-center ${
        location.pathname === "/" ? "mt-20" : "my-10"
      }`}
    >
      {/* Particles */}
      {location.pathname === "/contact-me" && <ParticlesUI />}

      <Heading headingTitle="Contact Me" />

      <div className="flex gap-12 flex-col lg:flex-row items-center justify-center">
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl dark:bg-dark-lite items-start flex flex-col justify-center sm:min-h-[350px] lg:min-h-[437px] border dark:border-none">
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center text-sm sm:text-base lg:text-lg font-medium gap-2 dark:text-white-deep">
              <PhoneCall />
              <span className="break-words">+917989772865</span>
            </li>
            <li className="flex items-center text-sm sm:text-base lg:text-lg font-medium gap-2 dark:text-white-deep">
              <Mail />
              <span className="break-words">kurbavigneshwari@gmail.com</span>
            </li>
            <li className="flex items-center text-sm sm:text-base lg:text-lg font-medium gap-2 dark:text-white-deep">
              <MapPin />
              <span className="break-words">Hyderabad, India</span>
            </li>
          </ul>
          <div className="flex gap-2 sm:gap-3 items-center justify-center lg:justify-start mt-8 sm:mt-12">
            <a
              href="https://www.linkedin.com/in/kothiralla-vigneshwari-482a6126b/"
              target="_blank"
            >
              <Linkedin size={30} className="hero-icon lang" />
            </a>
            <a href="https://github.com/Kotirallavigneshwari30" target="_blank">
              <Github size={30} className="hero-icon lang" />
            </a>
          
            <a
              className="lg:hidden"
              href="mailto:kurbavigneshwari@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail size={30} className="hero-icon lang" />
            </a>
            <a
              className="hidden lg:block"
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=kurbavigneshwari@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail size={30} className="hero-icon lang" />
            </a>
            <a href="https://wa.me/917989772865" target="_blank">
              <Phone size={30} className="hero-icon lang" />
            </a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
