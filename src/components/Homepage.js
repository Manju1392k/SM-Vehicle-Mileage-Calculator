

import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from 'react-router-dom';

export default function Home() {
  

    const [VehiclData, setVehicledata] = useState({
        Perlitercost: "",
        Totalamount: "",
        Density: "",
        Firstmeterreading: "",
        Secondmeterreading: "",
      });
    
      useEffect(() => {
        // Save formData to local storage whenever it changes
        localStorage.setItem("VehiclData", JSON.stringify(VehiclData));
      }, [VehiclData]);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        // Check if the input value is a number or text
        if (isNaN(value)) {
          toast.info("Please enter value in numbers only");
        } else {
          setVehicledata({ ...VehiclData, [name]: value });
        }
      };
    
        const [SelectVehicle, setSelectedvehicle] = useState('Not Selected');
        const [SelectFuel, setSelectedfuel] = useState('Not Selected');
    
        const handleChange = (event) => {
          setSelectedvehicle(event.target.value);
        };
        const handleChangetwo = (event) => {
          setSelectedfuel(event.target.value);
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            localStorage.setItem('Vehicletype', SelectVehicle);
            localStorage.setItem('Fueltype', SelectFuel);
            console.log('Vehicle Type', SelectVehicle)
            console.log('Fuel Type', SelectFuel)
            console.log('Information abut fuel amount, density, first meter reading, second meter reading etc', VehiclData)
        };
    
        const [vehicleData, setVehicleData] = useState(null);
    
        useEffect(() => {
          // Get data from localStorage and set it to state
          const storedData = localStorage.getItem('VehiclData');
          if (storedData) {
            // Parse the stringified data back into an object
            setVehicleData(JSON.parse(storedData));
          }
        }, []);

  return (
    
    

        <div className="App">
          <ToastContainer position="top-center" />
          {/* Heading text. */}
          <h1 className="text-4xl font-bold bg-white my-2 mx-8 py-4 px-8 w-max rounded-md">
            Vehicle Mileage Calcalutor
          </h1>
    
          {/* Div for form.*/}
          <div className="Mileageform mx-8 px-8 py-3 bg-white rounded-md">
            <form onSubmit={handleSubmit}>
              {/* Vehicle type input */}
              <h1 className=" font-bold text-2xl mb-2">Vehicle Type</h1>
              <select
                name="vehicles"
                id="vehicles"
                className="bg-[#8A2BE2] outline-none rounded-sm text-sm text-white font-bold py-2 px-2"
                value={SelectVehicle} onChange={handleChange}
              >
                <option value="Not Selected">Choose Vehicle</option>
                <option value="2 Wheeler">2 Wheeler</option>
                <option value="4 Wheeler ">4 Wheeler </option>
                <option value="Other Vehicle">Other Vehicle</option>
              </select>
    
              {/* Fuel type input */}
              <h1 className=" font-bold text-2xl my-2">Fuel Type</h1>
              <select
                name="fuels"
                id="fuels"
                className="bg-[#8A2BE2] outline-none rounded-sm text-sm text-white font-bold py-2 px-2"
                value={SelectFuel} onChange={handleChangetwo}
              >
                <option value="Not Selected">Choose Fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel </option>
                <option value="Other Fuel">Other Fuel</option>
              </select>
    
              {/* Per liter cost input */}
              <h1 className=" font-bold text-2xl my-2">
                Per liter Cost of Fuel in Rs
              </h1>
              <input
                type="tel"
                name="Perlitercost"
                placeholder="Per liter Cost"
                className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]"
                value={VehiclData.Perlitercost}
                onChange={handleInputChange}
                required
              />
    
              {/* Total amount of fuel input */}
              <h1 className=" font-bold text-2xl my-2">
                Total Refill Amount of Fuel
              </h1>
              <input
                type="tel"
                name="Totalamount"
                placeholder="Fuel Density"
                className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]"
                value={VehiclData.Totalamount}
                onChange={handleInputChange}
                required
              />
    
              {/* Fuel Density input */}
              <h1 className=" font-bold text-2xl my-2">Fuel Density</h1>
              <input
                type="tel"
                name="Density"
                placeholder="Fuel Density (optional)"
                className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]"
                value={VehiclData.Density}
                onChange={handleInputChange}
              />
    
              {/* First Meter Reading input */}
              <h1 className=" font-bold text-2xl my-2">
                First Meter Reading of Vehicle
              </h1>
              <input
                type="tel"
                name="Firstmeterreading"
                placeholder="Enter First Meter Reading. First time Refill Meter Reading"
                className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]"
                value={VehiclData.Firstmeterreading}
                onChange={handleInputChange}
                required
              />
    
              {/* First Meter Reading input */}
              <h1 className=" font-bold text-2xl my-2">
                Second Meter Reading of Vehicle
              </h1>
              <input
                type="tel"
                name="Secondmeterreading"
                placeholder="Enter First Meter Reading. Second time Refill Meter Reading"
                className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]"
                value={VehiclData.Secondmeterreading}
                onChange={handleInputChange}
                required
              />
    
              {/* Submit button */}
              <Link to='/resultpage'>
    <input
        type="Submit"
        value="Show results"
        className="bg-[#8A2BE2] text-white font-bold my-2 px-3 py-2 rounded-md cursor-pointer focus:bg-[#b05bff] hover:bg-[#75479f]"
    />
</Link>
           
            </form>
          </div>
    
        {/* Results Page */}
        <div className="ResultPage w-full h-full bg-black text-white">
        {vehicleData && (
            <div>
              <p>Vehicle Name: {vehicleData.Perlitercost}</p>
              <p>Vehicle Model: {vehicleData.Firstmeterreading}</p>
              {/* Add more fields as necessary */}
            </div>
          )}
        </div>
    
        </div>
  )
}
