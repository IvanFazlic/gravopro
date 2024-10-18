// pages/o-nama.tsx
"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-16">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Izrada proizvoda</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        Povoljno izrađujemo sve vrste natpisnih tabli, inventarskih pločica i pločica za obeležavanje mašina svih namena, stalaka i polica za izlaganje farmaceutskih proizvoda.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        Mogu se raditi i proizvodi za industriju: dihtunzi , pločice za obeležavanje prostorija, pločice za vrata, graviranje na tekstilu i koži.
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
