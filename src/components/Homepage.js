import React, { useState } from 'react';

function Home() {
  const [VehicleData, setVehicleData] = useState({
    vehicletype: '',
    fueltype: '',
    FuelPrice: '',
    TotalAmount: '',
    FuelDensity: '',
    FirstFuelPoint: '',
    SecondFuelPoint: '',
  });

  const handleChange = (event) => {
    setVehicleData({
      ...VehicleData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('VehicleData', JSON.stringify(VehicleData));
  };

  return (
    <form onSubmit={handleSubmit}>

      <select name="vehicletype" onChange={handleChange} required={true}>
        <option value="Not Selected">Choose Vehicle</option>
        <option value="2 Wheeler">2 Wheeler</option>
        <option value="female">4 Wheeler</option>
        <option value="Other Vehicle">Other Vehicle</option>
      </select>

      <select name="fueltype" onChange={handleChange} required={true}>
        <option value="Not Selected">Choose Fuel</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Other Fuel">Other Fuel</option>
      </select>

      <h1>Fuel Per liter Cost</h1>
      <input type="tel" name="FuelPrice" onChange={handleChange} placeholder="Per liter of fuel" required />

      <h1>Total Refil of Fuel Amout</h1>
      <input type="tel" name="TotalAmount" onChange={handleChange} placeholder="Total Amount in Rupess" required />

      <h1>Fuel Density</h1>
      <input type="tel" name="FuelDensity" onChange={handleChange} placeholder="Fuel Density (optional)" required />

      <h1>First Fuel Point Meter Reading</h1>
      <input type="tel" name="FirstFuelPoint" onChange={handleChange} placeholder="First Fuel Point Meter Reading. Enter First Refil Fuel Meter Reading" required />

      <h1>Second Fuel Point Meter Reading</h1>
      <input type="tel" name="SecondFuelPoint" onChange={handleChange} placeholder="Second Fuel Point Meter Reading. Enter Second Refil Fuel Meter Reading" required />

      <button type="submit">Submit</button>

    </form>
  );
}

export default Home;
