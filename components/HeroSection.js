export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col md:flex-row items-center justify-center">
        {/* Gambar di atas teks pada mobile */}
        <div className="w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden mb-12 md:mb-0 md:ml-12 order-1 md:order-2">
          <img
            src="/img/muchtar.png"
            alt="Developer"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Teks di bawah gambar pada mobile */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm Muchtar Syarifrudin
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Building modern web applications with cutting-edge technologies
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View My Work
            </button>
            <button className="border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}