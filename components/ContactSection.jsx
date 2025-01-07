import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ContactSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          to: 'syarifrudinmuchtar@students.unnes.ac.id'
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0119]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-300 space-y-4">
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate or just say hi!
            </p>
            <div className="flex flex-wrap justify-start space-x-4">
              <a
                href="https://github.com/cheesekimbapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="h-12 w-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-muchtar-syarifrudin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-12 w-12" />
              </a>
              <a
                href="https://www.instagram.com/muchtarsyarifr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram className="h-12 w-12" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}