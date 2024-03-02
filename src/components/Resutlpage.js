
import React, { useState, useEffect } from "react";

export default function Resutlpage() {
  const [vehicleData, setVehicleData] = useState(null);
  // const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    // Get data from localStorage and set it to state
    const storedData = localStorage.getItem('VehiclData');
    if (storedData) {
      // Parse the stringified data back into an object
      setVehicleData(JSON.parse(storedData));
    }
  }, []);

  const totalMileage = vehicleData.Secondmeterreading - vehicleData.Firstmeterreading;
  const totalFuel = vehicleData.Totalamount / vehicleData.Perlitercost;
  const mileagePerLiter = totalMileage / totalFuel;
  return (
    <>
      {vehicleData ?
        <div>
          <p>Vehicle Type: { }</p>
          <p>Fuel Type: { }</p>
          <p>Fuel per liter cost: {vehicleData.Perlitercost}</p>
          <p>Fuel Density: {vehicleData.Density}</p>
          <p>Total Amount Refill in Tank: {vehicleData.Totalamount}</p>
          <p>Total Mileage: {vehicleData.Secondmeterreading - vehicleData.Firstmeterreading}</p>
          <p>Per Liter Mileage: {mileagePerLiter}</p>
          <p>Total Fuel get in tank: {vehicleData.Totalamount / vehicleData.Perlitercost}</p>
          {/* Add more fields as necessary */}
        </div>
        :
        <div>Fill the details properly</div>
      }
    </>
  )
}

