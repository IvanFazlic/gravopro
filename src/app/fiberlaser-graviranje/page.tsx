// pages/o-nama.tsx
"use client";
import Carousel from "@/components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-8 set-an-image">
      <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Fiber laser graviranje</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Fiber laser graviranje je idealno za graviranje metala, pružajući neverovatnu preciznost i dugotrajne rezultate.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Pogodno je za:</p>
        <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 mb-4">
          <li>Obeležavanje proizvoda</li>
          <li>Izradu serijskih brojeva</li>
          <li>QR kodova</li>
          <li>Logotipa i drugih oznaka sa visokim nivoom detalja</li>
        </ul>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Fiber laser je posebno efikasan za rad na prohromu, aluminijumu, mesingu i drugim metalima, čineći ga savršenim izborom za industrijske i komercijalne potrebe.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Nudimo kvalitet, preciznost i brzu realizaciju svih vaših ideja – kontaktirajte nas!
        </p>
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
