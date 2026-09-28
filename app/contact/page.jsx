"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4 sm:p-8 lg:p-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-lg">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-slate-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="flex-1 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-100">
            <h2 className="text-blue-600 text-xl font-bold mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                <span className="mr-2">📧</span> <strong>Email:</strong> info@example.com
              </p>
              <p>
                <span className="mr-2">📞</span> <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <span className="mr-2">📍</span> <strong>Location:</strong> New Delhi, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-[2_2_0%] relative">
            {status === 'success' && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We will get back to you shortly.</p>
                </div>
              </div>
            )}
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your Name"
              className="w-full p-4 mb-4 border border-slate-300 rounded-lg text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Your Email"
              className="w-full p-4 mb-4 border border-slate-300 rounded-lg text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <textarea
              rows="6"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Write your message..."
              className="w-full p-4 mb-6 border border-slate-300 rounded-lg text-base outline-none resize-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            ></textarea>
            <button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto bg-blue-600 text-white border-none py-3 px-8 rounded-lg cursor-pointer text-base font-bold hover:bg-blue-700 transition-colors shadow-sm disabled:bg-blue-400">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}