export default function Home() {
  return (
    <div>
      {/* Footer section with background image */}
      <footer className="relative bg-cover bg-center text-white py-16" style={{ backgroundImage: "url('/img-footer.jpg')" }}>
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Radno vreme */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Radno vreme</h3>
              <p className="text-lg">
                Ponedeljak – subota: 10h-20h
              </p>
            </div>

            {/* Lokacija */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Lokacija</h3>
              <p className="text-lg">
                Kolonija 1, Voždovac, Beograd
              </p>
            </div>

            {/* Kontakt podaci */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kontakt podaci</h3>
              <p className="text-lg">
                <a href="tel:+381603097128" className="text-blue-500 hover:underline">
                  +381 60 3097 128
                </a>
                <br />
                <a href="mailto:gravoprodukt@gmail.com" className="text-blue-500 hover:underline">
                  gravoprodukt@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
