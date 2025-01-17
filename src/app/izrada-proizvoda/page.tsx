// pages/o-nama.tsx
"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-8 set-an-image">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Izrada proizvoda</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Pristupačno izrađujemo razne proizvode, uključujući:
        </p>
        <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 mb-4">
          <li>Natpisne table</li>
          <li>Pločice za vrata i prozore</li>
          <li>Pehare, plakete, medalje, flaše</li>
          <li>Inventarske pločice</li>
          <li>Pločice za obeležavanje mašina i prostorija</li>
          <li>Stalke i police za izlaganje proizvoda</li>
        </ul>
      </div>
      <div className="w-full md:w-4/5 flex-grow mb-5 md:mb-0">
        <div className="w-full h-auto min-h-[250px]">
          <Carousel directory="laserskoSecenje" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
