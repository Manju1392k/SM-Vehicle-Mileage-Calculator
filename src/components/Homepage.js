
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";

function Home() {

  // Wrapping total code in 'try & catch to avoid crashes'.
  try {
    // Using var becuase var did not have block scope. But let & const have block scope.
    var [VehicleData, setVehicleData] = useState({
      vehicletype: '',
      fueltype: '',
      FuelPrice: '',
      TotalAmount: '',
      FuelDensity: '',
      FirstFuelPoint: '',
      SecondFuelPoint: '',
    });

    // Function for validation and updating the state
    var handleChange = (event) => {
      // Copy the VehicleData object
      const newVehicleData = { ...VehicleData };

      // Updating the value in inputs
      newVehicleData[event.target.name] = event.target.value;

      // Check if the new value is a number in all fields
      if (isNaN(newVehicleData.FuelPrice) || isNaN(newVehicleData.TotalAmount) || isNaN(newVehicleData.FuelDensity) || isNaN(newVehicleData.FirstFuelPoint) || isNaN(newVehicleData.SecondFuelPoint)) {
        toast.info('Please enter values in number format only.')
      } else {
        // If all inputs are numbers, update the state
        setVehicleData(newVehicleData);
      };
    }

    // Function to save 'VehicleData in localStorage'
    var handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('VehicleData', JSON.stringify(VehicleData));
    };

    var allFieldsFilled = Object.values(VehicleData).every((field) => field !== '');

  } catch (error) {
    toast("Something went wrong. Please try later")
  };

  return (
    <>

      {/* Div for Heading */}
      <div className="w-full grid justify-center">
        <ToastContainer
          position="top-center"
        />
        <h1 className="text-3xl bg-white w-max py-4 px-4 mt-3 rounded-md font-bold">SM Vehicle Mileage Calculator</h1>

        {/* Div for form background */}
        <div className=" bg-white w-[95vw] py-4 px-4 my-3 rounded-md ">
          <form className="flex flex-col items-start" onSubmit={handleSubmit}>

            {/* Select menu for To Choose Vehicle Type */}
            <select className="my-2 bg-[#7741f6] text-white font-semibold py-2 px-2 rounded-md outline-none" name="vehicletype" onChange={handleChange} required={true}>
              <option value="Not Selected">Choose Vehicle</option>
              <option value="2 Wheeler">2 Wheeler</option>
              <option value="4 Wheeler">4 Wheeler</option>
              <option value="Other Vehicle">Other Vehicle</option>
            </select>

            {/* Select menu for To Choose Fuel Type */}
            <select className="my-2 bg-[#7741f6] text-white font-semibold py-2 px-2 rounded-md outline-none" name="fueltype" onChange={handleChange} required={true}>
              <option value="Not Selected">Choose Fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Other Fuel">Other Fuel</option>
            </select>

            {/* Input for to take Pertol or Diesel per liter cost */}
            <h1 className='font-semibold text-xl'>Fuel Per liter Cost</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="FuelPrice" onChange={handleChange} placeholder="Per liter of fuel in Rupess" required />

            {/* Input for to take how much price pertol or diesel is filled in tank */}
            <h1 className='font-semibold text-xl'>Total Refill of Fuel Amout</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="TotalAmount" onChange={handleChange} placeholder="Total Amount in Rupess" required />

            {/* Input for to take the pertol or diesel density */}
            <h1 className='font-semibold text-xl'>Fuel Density</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="FuelDensity" onChange={handleChange} placeholder="Fuel Density (optional) in numbers format" />

            {/* Input for to take the first fuel stop point meter reading */}
            <h1 className='font-semibold text-xl'>First Fuel Point Meter Reading</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="FirstFuelPoint" onChange={handleChange} placeholder="First Fuel Point Meter Reading. Enter First Refill Fuel Meter Reading in numbers format" required />

            {/* Input for to take the Second fuel stop point meter reading */}
            <h1 className='font-semibold text-xl'>Second Fuel Point Meter Reading</h1>
            <input className="mb-2 py-2 px-2 rounded-md w-full outline-none border-2 focus:border-[#7741f6]" type="tel" name="SecondFuelPoint" onChange={handleChange} placeholder="Second Fuel Point Meter Reading. Enter Second Refill Fuel Meter Reading in numbers format" required />

            {/* When all the inputs are filled then this button will redirect resultspage or if the fields are not filled properly then it work has a button. */}
            {allFieldsFilled ? <>
              <Link to="/resultpage">
                {/* Button for submitting VehicleData to localStorage */}
                <button className="bg-[#7741f6] py-2 px-6 rounded-lg text-white font-semibold hover:bg-[#8b5aff] active:bg-[#592bc3]" type="submit">Show Results</button>
              </Link>
            </>
              :
              <>
                {/* Button for submitting VehicleData to localStorage */}
                <button className="bg-[#7741f6] py-2 px-6 rounded-lg text-white font-semibold hover:bg-[#8b5aff] active:bg-[#592bc3]" type="submit">Show Results</button>
              </>

            }

          </form>
        </div>
      </div>

    </>

  );
}

export default Home;
