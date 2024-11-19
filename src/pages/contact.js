import React, { useState } from 'react';
import servicesData from '../json/services.json'; 
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      contact: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <h2>Request Service</h2>
      <div onSubmit={handleSubmit} className='contact-form'>
        <div className="contact-form-group">
          <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className="contact-form-group">
          <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className="contact-form-group">
          <input type="tel" id="contact" name="contact" placeholder='Contact' value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="contact-form-group">
          <select id="service" name="service" placeholder='Choose Service' value={formData.service} onChange={handleChange} required>
            <option value="">Select</option>
            {servicesData.map((service, index) => (
              <option key={index} value={service.title}>{service.title}</option>
            ))}
          </select>
        </div>
        <div className="contact-form-group">
          <textarea id="message" name="message" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="contact-form-group">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact
