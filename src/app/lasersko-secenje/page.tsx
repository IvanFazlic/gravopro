// pages/o-nama.tsx
"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-2 set-an-image">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Lasersko sečenje</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Brzo i precizno sečemo razne materijale, uključujući klirit, drvo, pleksiglas, karton i drugo. Posebno smo specijalizovani za sečenje projekata za makete i modelarstvo koji zahtevaju preciznost i pažnju prema detaljima, brzo i kvalitetno.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Usluge laserskog sečenja omogućavaju rad sa različitim materijalima, kao što su:
        </p>
        <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 mb-4">
          <li>Klirit</li>
          <li>Drvo</li>
          <li>Pleksiglas</li>
          <li>Plastika</li>
          <li>Stirodur</li>
          <li>Karton</li>
          <li>Šperploča</li>
          <li>Pluta</li>
          <li>Furniri</li>
        </ul>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          U skladu sa vašim potrebama, moguća je izrada i sečenje maksimalne površine 1200x800mm.
        </p>
      </div>
      <div className="w-full md:w-4/5 flex-grow mb-5 md:mb-0">
        <div className="w-full h-auto min-h-[250px]">
          <Carousel directory="laserskoSecenje" totalCount={5}/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
