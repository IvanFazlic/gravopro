import Carousel from '@/components/Carousel';
export default function Home() {
  return (
    <div>
      {/* Hero section with background image */}
      <div className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/img.jpg')" }}>
        <div className="absolute top-1/4 left-5 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Dobro došli u FD <br></br>Gravoprodukt!</h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Pružamo usluge laserskog graviranja i sečenja sa <br></br>visokom preciznošću.
          </p>
        </div>
      </div>

      {/* Section with title and cards */}
      <div className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Zašto izabrati FD Gravoprodukt?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {/* First card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Visoka preciznost</h3>
            <p className="text-gray-600">
              Koristimo najsavremenije lasere koji obezbeđuju izuzetnu tačnost i detalje u svakom graviranju.
            </p>
          </div>

          {/* Second card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Brza isporuka</h3>
            <p className="text-gray-600">
              Naša efikasnost omogućava da vaš proizvod bude završen i isporučen u rekordnom roku.
            </p>
          </div>

          {/* Third card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Povoljni uslovi</h3>
            <p className="text-gray-600">
              Nudimo kvalitetne usluge po pristupačnim cenama, uz mogućnost prilagođenih rešenja.
            </p>
          </div>
        </div>
        <Carousel directory='primerNasegRada' totalCount={6}/>
      </div>
    </div>
  );
}
