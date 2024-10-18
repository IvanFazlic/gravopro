"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-16">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Lasersko graviranje</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Pružamo usluge laserskog graviranja i sečenja raznih vrsta materijala sa visokom preciznošću.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Materijali koji se koriste su drvo (hrast, bukva, jasen, medijapan), klirit (pleksiglas), plastika, staklo, koža, eko koža, guma, tekstil, eva pena, keramika, kamen, mermer, prohrom, metal, magnetni stikeri.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Primena je neograničena – od izrade reklamnih ploča za Vaše firme, promotivnog materijala (rokovnika, privezaka, olovaka, satova), ID pločica, pečata, serijskog obeležavanja i numerisanja, pehara, medalja, privezaka, flaša, čaša, kutija za poklone, kutija za vino, olovaka, upaljača, USB-a i unikatnih poslovnih poklona.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Precizna kontrola brzine kretanja i snage lasera daje graviranje sa puno detalja u rasponu od površinskog do dubokog.
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
