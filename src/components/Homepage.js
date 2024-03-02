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
    <>
      <div className="w-full grid justify-center">
        <h1 className="text-3xl bg-white w-max py-4 px-4 mt-3 rounded-md font-bold">SM Vehicle Mileage Calculator</h1>

        <div className=" bg-white w-[95vw] py-4 px-4 my-3 rounded-md ">
          <form className="flex flex-col items-start" onSubmit={handleSubmit}>

            <select className="my-2 bg-[#7741f6] text-white font-semibold py-2 px-2 rounded-md outline-none" name="vehicletype" onChange={handleChange} required={true}>
              <option value="Not Selected">Choose Vehicle</option>
              <option value="2 Wheeler">2 Wheeler</option>
              <option value="female">4 Wheeler</option>
              <option value="Other Vehicle">Other Vehicle</option>
            </select>

            <select className="my-2 bg-[#7741f6] text-white font-semibold py-2 px-2 rounded-md outline-none" name="fueltype" onChange={handleChange} required={true}>
              <option value="Not Selected">Choose Fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Other Fuel">Other Fuel</option>
            </select>

            <h1 className='font-semibold text-xl'>Fuel Per liter Cost</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="FuelPrice" onChange={handleChange} placeholder="Per liter of fuel" required />

            <h1 className='font-semibold text-xl'>Total Refil of Fuel Amout</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="TotalAmount" onChange={handleChange} placeholder="Total Amount in Rupess" required />

            <h1 className='font-semibold text-xl'>Fuel Density</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="FuelDensity" onChange={handleChange} placeholder="Fuel Density (optional)" required />

            <h1 className='font-semibold text-xl'>First Fuel Point Meter Reading</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="FirstFuelPoint" onChange={handleChange} placeholder="First Fuel Point Meter Reading. Enter First Refil Fuel Meter Reading" required />

            <h1 className='font-semibold text-xl'>Second Fuel Point Meter Reading</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="SecondFuelPoint" onChange={handleChange} placeholder="Second Fuel Point Meter Reading. Enter Second Refil Fuel Meter Reading" required />

            <button className="bg-[#7741f6] py-2 px-6 rounded-lg text-white font-semibold hover:bg-[#8b5aff] active:bg-[#592bc3]" type="submit">Show Results</button>

          </form>
        </div>
      </div>

    </>

  );
}

export default Home;
