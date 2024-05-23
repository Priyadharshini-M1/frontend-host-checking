import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    totalPersons: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/book`, {
      method: 'POST',
    });

    if (!response.ok) {
      console.error(`Failed to submit form: ${response.statusText}`);
      alert('Error submitting form. Please try again.');
      return;
    }

    setFormData({
      name: '',
      age: '',
      totalPersons: '',
      checkIn: '',
      checkOut: ''
    });

    console.log('Form submitted successfully');
  };

  return (
    <div className='book-container'>
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} />

        <label htmlFor="totalPersons">Total Persons:</label>
        <input type="number" id="totalPersons" name="totalPersons" value={formData.totalPersons} onChange={handleChange} />

        <label htmlFor="checkIn">Check-In Date:</label>
        <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} />

        <label htmlFor="checkOut">Check-Out Date:</label>
        <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} />

        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Book;
