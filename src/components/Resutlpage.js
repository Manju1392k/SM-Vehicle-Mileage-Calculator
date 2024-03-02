
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

// Define an async function to calculate mileage per liter
async function calculateMileagePerLiter(vehicleData) {
  try {
      // Retrieve the Secondmeterreading value from local storage
      const secondMeterReading = await getSecondMeterReadingFromLocalStorage();

      // Calculate totalMileage
      const totalMileage = vehicleData.Secondmeterreading - vehicleData.Firstmeterreading;

      // Calculate totalFuel
      const totalFuel = vehicleData.Totalamount / vehicleData.Perlitercost;

      // Calculate mileagePerLiter
      const mileagePerLiter = totalMileage / totalFuel;

      const mileageResultElement = document.getElementById('mileageResult');

      // Update the content of the element with the calculated value
      mileageResultElement.textContent = mileagePerLiter

      return mileagePerLiter;
  } catch (error) {
      console.error("Error fetching Secondmeterreading from local storage:", error);
      throw error;
  }
}

// Call the async function
calculateMileagePerLiter(vehicleData)
    .then((result) => {
        console.log("Mileage per liter:", result);
    })
    .catch((error) => {
        console.error("Error calculating mileage per liter:", error);
    });

// Simulate fetching Secondmeterreading from local storage
async function getSecondMeterReadingFromLocalStorage() {
    // Simulate an asynchronous delay (e.g., fetching from local storage)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return a sample value (replace with actual local storage retrieval logic)
    return 12000;
}

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
          <p >Per Liter Mileage: <span id="mileageResult"></span></p>
          <p>Total Fuel get in tank: {vehicleData.Totalamount / vehicleData.Perlitercost}</p>
          {/* Add more fields as necessary */}
        </div>
        :
        <div>Fill the details properly</div>
      }
    </>
  )
}

