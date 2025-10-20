import React from 'react';
import Card from './common/Card.tsx';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Let's Build the Future Together</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            Have a project in mind or just curious about AI? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
                  Send Message
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;