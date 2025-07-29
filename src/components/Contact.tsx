import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);
    try {
      const response = await fetch('https://portfolio-backend-d87a.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send. Try again.');
      }
    } catch {
      setStatus('Server error. Please try later.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-10">
          Got a project idea or just want to say hello? Feel free to reach out!
        </p>
        <form className="space-y-4 flex flex-col items-start" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <label>Email id:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <label>Message:</label>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && <div className="mt-4 text-indigo-300">{status}</div>}
      </div>
    </section>
  );
};

export default Contact;
