import ParticlesUI from "@/Animation/ParticlesUI";
import { Heading } from "@/Components/Common/Heading";
import ShineBorder from "@/Components/ui/shine-border";
import { FolderKanban, Lightbulb, Rocket, Terminal } from "lucide-react";
import { useLocation } from "react-router-dom";
import vigguLogo from "../../assets/Logo/viggu.jpg";

const AboutMe = () => {
  const location = useLocation();

  return (
    <section
      className={`w-11/12 mx-auto ${
        location.pathname === "/" ? "mt-10 md:mt-20" : "my-6 md:my-10"
      }`}
    >
      <div className="relative flex flex-col gap-10 md:gap-20 lg:flex-row items-center">
        {/* Particles */}
        {location.pathname === "/about-me" && <ParticlesUI />}

        {/* Image Section */}
        <div className="lg:w-[30%] flex justify-center">
          <ShineBorder
            borderRadius={9999}
            color="#38BD67"
            borderWidth={3}
            className="dark:bg-transparent bg-transparent"
          >
            <img
              className="lg:w-[320px] w-10/12 rounded-full shadow-lg"
              src={vigguLogo}
              alt="kotiralla vigneshwari"
            />
          </ShineBorder>
        </div>

        {/* About Content Section */}
        <div className="lg:w-[70%] flex flex-col items-center lg:items-start text-dark-lite dark:text-white-deep">
          <Heading headingTitle="About Me" />
          <h2 className="text-center lg:text-start text-2xl md:text-3xl text-primary1 font-semibold leading-snug md:leading-[48px] mb-4 md:mb-6">
            Kotiralla Vigneshwari
          </h2>
          <p className="text-left lg:text-justify text-base md:text-lg font-medium leading-relaxed md:leading-loose">
Full-stack developer with expertise in building scalable e-commerce platforms and high-performance marketplace applications. Proven ability to architect and deliver robust, user-focused web solutions that drive business growth. Eager to contribute innovative ideas and technical excellence to fast-paced, results-driven tech teams.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
        {/* Skills & Expertise */}
        <div>
          <p className="text-left lg:text-justify text-base md:text-lg font-medium leading-relaxed md:leading-loose">
            I specialize in{" "}
            <strong>React, JavaScript, Bootstrap and Python</strong>,
            complemented by hands-on experience with backend technologies like{" "}
            <strong>Node.js and MongoDB</strong>. My focus is on delivering
            clean, efficient, and scalable solutions—whether it's Building
            E-Commerce Website, optimizing performance, or integrating robust
            backend systems.
          </p>
        </div>

        {/* Passion Section */}
        <div>
          <strong className="flex items-center gap-2 text-lg md:text-xl font-semibold mb-2 md:mb-3">
            <Lightbulb className="text-primary1" /> What Drives Me
          </strong>
          <ul className="space-y-2 text-base md:text-lg pl-5">
            <li className="mb-2">
              Designing responsive and scalable web applications.
            </li>
            <li className="mb-2">
              Writing clean, maintainable, and well-documented code.
            </li>
            <li>
              Enhancing user experiences through thoughtful design and
              interactivity.
            </li>
          </ul>
        </div>

        {/* Beyond Coding Section */}
        <div>
          <strong className="flex items-center gap-2 text-lg md:text-xl font-semibold mb-2 md:mb-3">
            <Terminal className="text-primary1" /> Beyond the Code
          </strong>
          <p className="text-left lg:text-justify text-base md:text-lg font-medium leading-relaxed md:leading-loose">
            Outside of coding, I’m deeply committed to self-improvement through reading, mindfulness, and staying ahead of tech trends. I thrive on continuous learning and enjoy exploring new ideas that push the boundaries of what technology can achieve.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-lg md:text-xl font-semibold">
          <span>
            Ready to collaborate? Let's build something extraordinary!
          </span>
          <Rocket className="text-primary1" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
