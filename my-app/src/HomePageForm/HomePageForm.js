import React, { useState } from 'react';

const HomePageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Вашата логика за обработка на формата тук
    console.log('Form submitted:', formData);
    // Изчистване на формата след изпращане
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Контактна форма</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Име:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Имейл:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Съобщение:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Изпрати</button>
      </form>
    </div>
  );
};

export default HomePageForm;