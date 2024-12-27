import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="bg-orange-100 py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="NAME"
              className="w-full p-3 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full p-3 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <textarea
              placeholder="MESSAGE"
              className="w-full p-3 rounded-md"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition"
          >
            Send the message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;