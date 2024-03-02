import React, { useState } from 'react';

function Home() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    gender: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" />
      <input type="text" name="address" onChange={handleChange} placeholder="Address" />
      <select name="gender" onChange={handleChange}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Home;
