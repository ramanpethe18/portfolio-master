// Services.js
import React, { useState } from 'react';
import servicesData from '../json/services.json'; 
import './services.css';

const Services = () => {
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
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <h2>Request Service</h2>
      <div onSubmit={handleSubmit} className='service-form'>
        <div className="service-form-group">
          <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className="service-form-group">
          <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className="service-form-group">
          <input type="tel" id="contact" name="contact" placeholder='Contact' value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="service-form-group">
          <select id="service" name="service" placeholder='Choose Service' value={formData.service} onChange={handleChange} required>
            <option value="">Select</option>
            {servicesData.map((service, index) => (
              <option key={index} value={service.title}>{service.title}</option>
            ))}
          </select>
        </div>
        <div className="service-form-group">
          <textarea id="message" name="message" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="service-form-group">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
