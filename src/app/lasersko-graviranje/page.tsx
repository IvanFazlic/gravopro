"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-8 set-an-image">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">LASERSKO GRAVIRANJE</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Nudimo usluge laserskog graviranja raznih vrsta materijala sa izuzetnom preciznošću.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Možemo da graviramo na širokom spektru materijala, uključujući:
        </p>
        <ul className="text-lg md:text-xl font-semibold text-gray-800 list-disc pl-8 mb-4">
          <li>Drvo (hrast, bukva, jasen, medijapan)</li>
          <li>Klirit (pleksiglas)</li>
          <li>Plastiku</li>
          <li>Kožu i eko kožu</li>
          <li>Gumu, tekstil, EVA penu</li>
          <li>Mermer</li>
          <li>Prohrom, metal</li>
        </ul>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Nudimo uslugu graviranja:
        </p>
        <ul className="text-lg md:text-xl font-semibold text-gray-800 list-disc pl-8 mb-4">
          <li>Reklamne ploče za firme</li>
          <li>Promotivni materijal (rokovnici, privesci, olovke, satovi)</li>
          <li>ID pločice, serijsko obeležavanje i numerisanje</li>
          <li>Pehare, plakete, medalje, flaše</li>
          <li>Kutije za poklone i vino, USB memorije, unikatne poslovne poklone</li>
        </ul>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Precizna kontrola brzine i snage lasera omogućava detaljno graviranje, od površinskog do dubokog.
        </p>
      </div>
      <div className="w-full md:w-4/5 mb-20 md:mb-0">
        <div className="w-full h-64 md:h-auto">
          <Carousel directory="laserskoSecenje" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
