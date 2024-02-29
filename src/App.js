function App() {
  // function checkIfOptionSelected(selectId) {
  //   const selectElement = document.getElementById(selectId);
  //   if (selectElement.value !== '') {
  //       // An option is selected
  //       return true;
  //   } else {
  //       // No option selected
  //       return false;
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Your custom logic here (e.g., sending data to the server)
  };
  return (

    <div className="App">

      {/* Heading text. */}
      <h1 className="text-4xl font-bold bg-white my-2 mx-8 py-4 px-8 w-max rounded-md">
        Vehicle Mileage Calcalutor
      </h1>

      {/* Div for form.*/}
      <div className="Mileageform mx-8 px-8 py-3 bg-white rounded-md">
        <form onSubmit={handleSubmit}>

          {/* Vehicle type input */}
          <h1 className=" font-bold text-2xl mb-2">Vehicle Type</h1>
          <select name="vehicles" id="vehicles" className="bg-[#8A2BE2] outline-none rounded-sm text-sm text-white font-bold py-2 px-2" >
            <option value="none">Choose Vehicle</option>
            <option value="TW" >2 Wheeler</option>
            <option value="4W">4 Wheeler </option>
            <option value="OV">Other Vehicle</option>
          </select>

          {/* Fuel type input */}
          <h1 className=" font-bold text-2xl my-2">Fuel Type</h1>
          <select name="fuels" id="fuels" className="bg-[#8A2BE2] outline-none rounded-sm text-sm text-white font-bold py-2 px-2">
            <option value="none">Choose Fuel</option>
            <option value="PT" >Petrol</option>
            <option value="DI">Diesel </option>
            <option value="OV">Other Fuel</option>
          </select>

          {/* Per liter cost input */}
          <h1 className=" font-bold text-2xl my-2">Per liter Cost of Fuel in Rs</h1>
          <input type='tel' placeholder="Per liter Cost" className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]" required />

          {/* Total amount of fuel input */}
          <h1 className=" font-bold text-2xl my-2">Total Refill Amount of Fuel</h1>
          <input type='tel' placeholder="Fuel Density" className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]" required />

          {/* Fuel Density input */}
          <h1 className=" font-bold text-2xl my-2">Fuel Density</h1>
          <input type='tel' placeholder="Fuel Density (optional)" className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]" />

          {/* First Meter Reading input */}
          <h1 className=" font-bold text-2xl my-2">First Meter Reading of Vehicle</h1>
          <input type='tel' placeholder="Enter First Meter Reading. First time Refill Meter Reading" className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]" required />

          {/* First Meter Reading input */}
          <h1 className=" font-bold text-2xl my-2">Second Meter Reading of Vehicle</h1>
          <input type='tel' placeholder="Enter First Meter Reading. Second time Refill Meter Reading" className="w-full px-2 py-2 rounded-sm outline-none border-2 focus:border-[#8A2BE2]" required />

          {/* Submit button */}
          <input type='submit' value='Show results' className="bg-[#8A2BE2] text-white font-bold my-2 px-3 py-2 rounded-md cursor-pointer focus:bg-[#b05bff] hover:bg-[#75479f]" />
        </form>
      </div>
    </div>

  );
}

export default App;
