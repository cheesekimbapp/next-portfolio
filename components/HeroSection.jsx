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

        {/* Teks di sebelah kiri pada desktop */}
        <div className="order-1 md:order-1 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hello 👋🏻, I'm
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Muchtar Syarifrudin
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Backend, Web Developer
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              View My Work
            </a>
            <a
              href="https://github.com/cheesekimbapp"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}