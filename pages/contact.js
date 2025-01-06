import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Web Developer Portfolio</title>
      </Head>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                className="w-full bg-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
