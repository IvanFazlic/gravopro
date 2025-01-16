// pages/o-nama.tsx
"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-16 set-an-image">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Lasersko sečenje</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Moguće je sečenje različitih vrsta materijala: klirita, drveta, kože, plastike, stirodura, kartona.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Brzo i kvalitetno vršimo usluge laserskog sečenja projekata za makete – modelarstvo.
        </p>
      </div>
      <div className="w-full md:w-4/5 mb-20 md:mb-0">
        <div className="w-full h-64 md:h-auto">
          <Carousel directory="laserskoSecenje"/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
