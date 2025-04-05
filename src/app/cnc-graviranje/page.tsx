// pages/o-nama.tsx
"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-2 set-an-image">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">CNC graviranje i sečenje</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Pored laserskog graviranja, pružamo i CNC usluge graviranja i sečenja na sledećim materijalima:
        </p>
        <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 mb-4">
          <li>Drvo</li>
          <li>Metal</li>
          <li>Plastika</li>
          <li>Klirit</li>
          <li>Aluminijum</li>
          <li>Mesing</li>
          <li>I dr.</li>
        </ul>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          CNC tehnologija omogućava veću fleksibilnost i detaljnu obradu za različite industrijske i personalizovane proizvode.
        </p>
      </div>
      <div className="w-full md:w-5/5 flex-grow mb-5 md:mb-0">
        <div className="w-full h-auto min-h-[250px]">
          <Carousel directory="cnc" totalCount={4} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
