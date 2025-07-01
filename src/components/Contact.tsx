// src/components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-10">
          Got a project idea or just want to say hello? Feel free to reach out!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
