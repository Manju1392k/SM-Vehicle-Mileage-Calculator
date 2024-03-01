
import React, { useState, useEffect } from "react";

export default function Resutlpage() {
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
    <>
    {vehicleData ? 
      <div>
      <p>Vehicle Name: {vehicleData.Perlitercost}</p>
      <p>Vehicle Model: {vehicleData.Firstmeterreading}</p>
      {/* Add more fields as necessary */}
    </div>
    :
    <div>Fill the details properly</div>
    }
    </>
  )
}
