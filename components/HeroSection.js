export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col md:flex-row items-center justify-center">
        {/* Gambar di atas teks pada mobile */}
        <div className="w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden mb-12 md:mb-0 md:ml-12 order-1 md:order-2">
          <img
            src="https://cdn0-production-images-kly.akamaized.net/5I_a8lOM3ylpQycEKWBm45caocs=/800x800/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3446551/original/010975200_1620025786-180775179_315551359977402_3739374589533792753_n.jpg"
            alt="Developer"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Teks di bawah gambar pada mobile */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm a Web Developer
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