import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero relative min-h-screen pt-16">
      {/* Background Image */}
      <img
        src="src/assets/Background/jogja.png"
        alt="Background Jogja"
        className="w-full h-screen object-cover fixed inset-0 z-0"
        data-aos="fade-in"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Welcome Section */}
        <div
          className="welcome relative mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            SISTEM INFORMATIKA-QU
          </h2>
          <p className="text-xl text-white">Rekomendasi Pilih PTS JOGJA</p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Why Box - Left Column */}
          <div className="w-full lg:w-1/3">
            <div
              className="bg-white bg-opacity-90 rounded-xl p-8 h-full shadow-lg"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <h4 className="text-2xl font-bold text-center mb-4">
                Apa itu Sistem Informatika-Qu?
              </h4>
              <p className="text-center mb-6">
                Sistem Informatika-Qu adalah, sistem pendukung keputusan
                pemilihan Perguruan Tinggi Swasta program studi Informatika/Tek.
                Informatika di kota pelajar, Kota Yogyakarta.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-primary rounded-full"
                  data-bs-toggle="modal"
                  data-bs-target="#modalHitung"
                >
                  AYO COBA HITUNG <i className="fas fa-chevron-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Icon Boxes - Right Column */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Box 1 */}
              <div
                className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <div className="text-4xl text-primary mb-4">
                  <i className="fas fa-university"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Alternatif PTS Pilihan
                </h4>
                <p className="mb-4">
                  Data alternatif pilihan PTS yang tersedia pada sistem
                  diantaranya.
                </p>
                <div className="mt-auto text-center">
                  <a
                    href="#about"
                    className="btn btn-outline btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTampiluniversitas"
                  >
                    LIHAT
                  </a>
                </div>
              </div>

              {/* Box 2 */}
              <div
                className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div className="text-4xl text-primary mb-4">
                  <i className="fa-solid fa-rupiah-sign"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Biaya Kuliah</h4>
                <p className="mb-4">
                  Perkiraan biaya kuliah pada semester awal atau semester 1 Pada
                  PTS alternatif pilihan.
                </p>
                <div className="mt-auto text-center">
                  <a
                    href="#about"
                    className="btn btn-outline btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTampilbiaya"
                  >
                    LIHAT
                  </a>
                </div>
              </div>

              {/* Box 3 */}
              <div
                className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col"
                data-aos="zoom-out"
                data-aos-delay="500"
              >
                <div className="text-4xl text-primary mb-4">
                  <i className="fa-solid fa-ranking-star"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">TOP 9 PTNU</h4>
                <p className="mb-4">
                  Top 9 Perguruan Tinggi Nahdlatul Ulama Se-Indonesia versi
                  Impact Rank Webometrics.
                </p>
                <div className="mt-auto text-center">
                  <a
                    href="#about"
                    className="btn btn-outline btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTampilptnu"
                  >
                    LIHAT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
