import React from "react";
import { Heading } from "./Heading";
import CertificationImg1 from "../../assets/Images/c.jpg";
import CertificationImg2 from "../../assets/Images/c-1.jpg";
import CertificationImg3 from "../../assets/Images/c-2.jpg";
import CertificationImg4 from "../../assets/Images/c-3.jpg";
import CertificationImg5 from "../../assets/Images/c-4.jpg";
import CertificationImg6 from "../../assets/Images/c-5.jpg";


const Certifications = () => {
  const certifications = [
    { id: 1, src: CertificationImg1, alt: "Certification 1" },
    { id: 2, src: CertificationImg2, alt: "Certification 2" },
    { id: 3, src: CertificationImg3, alt: "Certification 3" },
    { id: 4, src: CertificationImg4, alt: "Certification 4" },
    { id: 5, src: CertificationImg5, alt: "Certification 5" },
    { id: 6, src: CertificationImg6, alt: "Certification 6" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading headingTitle="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-auto object-cover"
              src={cert.src}
              alt={cert.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
