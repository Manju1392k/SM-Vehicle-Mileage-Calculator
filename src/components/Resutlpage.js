
import React, { useState, useEffect } from "react";

export default function Resutlpage() {
  const [vehicleData, setVehicleData] = useState(null);
  const [VehicleType, setVehicleType] = useState(null);
  const [FuelType, setFuelType] = useState(null);
  // const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    // Get data from localStorage and set it to state
    const storedData = localStorage.getItem('VehiclData');
    const storedDatatwo = localStorage.getItem('Vehicletype');
    const storedDatathree = localStorage.getItem('Fueltype');
    if (storedData) {
      // Parse the stringified data back into an object
      setVehicleData(JSON.parse(storedData));
    }
    if (storedDatatwo) {
      // Parse the stringified data back into an object
      setVehicleType(JSON.stringify(storedDatatwo));
    }
    if (storedDatathree) {
      // Parse the stringified data back into an object
      setFuelType(JSON.stringify(storedDatathree));
    }
  }, []);

  // Define an async function to calculate mileage per liter
  async function calculateMileagePerLiter(vehicleData) {
    try {
      // Retrieve the Secondmeterreading value from local storage
      // eslint-disable-next-line no-unused-vars
      const secondMeterReading = await getSecondMeterReadingFromLocalStorage();

      // Calculate totalMileage
      const totalMileage = vehicleData.Secondmeterreading - vehicleData.Firstmeterreading;

      // Calculate totalFuel
      const totalFuel = vehicleData.Totalamount / vehicleData.Perlitercost;

      // Calculate mileagePerLiter
      const mileagePerLiter = totalMileage / totalFuel;

      const mileageResultElement = document.getElementById('mileageResult');
      const Totalmileagetwothrere = document.getElementById('Tmileage');
      const Toatalfuelgetin = document.getElementById('totalFuel');

      const wheelertype = document.getElementById('wheelertype');
      const fueltype = document.getElementById('fueltype');
      const Petroltextone = document.getElementById('Petroltextone');
      const Petroltexttwo = document.getElementById('Petroltexttwo');

      const Reusltvaluefour  = VehicleType.replace(/"/g, '');
      const Resultsvaluefive  = FuelType.replace(/"/g, '');

      wheelertype.textContent = Reusltvaluefour;
      fueltype.textContent = Resultsvaluefive;
      Petroltextone.textContent = Resultsvaluefive;
      Petroltexttwo.textContent = Resultsvaluefive;

      // Convert mileagePerLiter to an integer
      const mileagePerLiterInteger = Math.floor(mileagePerLiter);
      const TotalMileagetwo = Math.floor(totalMileage);
      const Toatalfuelgetinthresre = Math.floor(totalFuel);

      // Update the content of the element with the calculated value
      mileageResultElement.textContent = mileagePerLiterInteger;
      Totalmileagetwothrere.textContent = TotalMileagetwo.toFixed(2);
      Toatalfuelgetin.textContent = Toatalfuelgetinthresre.toFixed(2);

      

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
          <p>Vehicle Type: <span id="wheelertype"></span></p>
          <p>Fuel Type: <span id="fueltype"></span></p>
          <p><span id="Petroltextone"></span> per liter cost: {vehicleData.Perlitercost} Rs</p>
          <p><span id="Petroltexttwo"></span> Density: {vehicleData.Density}</p>
          <p>Total Amount Refill in Tank: {vehicleData.Totalamount} Rs</p>
          <p>Total Mileage: <span id="Tmileage"></span> Kms</p>
          <p>Per Liter Mileage: <span id="mileageResult"></span> Rs</p>
          <p>Total Fuel get in tank:  <span id="totalFuel"></span>  L</p>
          {/* Add more fields as necessary */}
        </div>
        :
        <div>Fill the details properly</div>
      }
    </>
  )
}

