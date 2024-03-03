/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import moment from "moment-timezone";

export default function Resutlpage() {

  // Get time and date from moment.
  const [datetime, setDatetime] = useState(moment().tz("Asia/Kolkata"));
  useEffect(() => {
    try {
      const interval = setTimeout(() => {
        setDatetime(moment().tz("Asia/Kolkata"));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    } catch (error) {
      toast("Something went wrong. Please try later");
    }
  }, []);

  var [vehicleData, setVehicleData] = useState({});

  useEffect(() => {
    try {
      // Fetch the data from the server
      fetch('http://localhost:3001/data')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setVehicleData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      toast("Something went wrong. Please try later");
    }
  }, []);

  // Get Fuel Type
  var FuelType = vehicleData.fueltype

  // Calculating total mileage given by vehicle
  var TotalMileage = vehicleData.SecondFuelPoint - vehicleData.FirstFuelPoint

  // Calculating how fuel get in tank
  var FuelgetinTank = vehicleData.TotalAmount / vehicleData.FuelPrice

  // Calculating how vehicle give mileage for per liter fuel
  var Perlitermileage = TotalMileage / FuelgetinTank

  return (
    <>
      <ToastContainer position="top-center" />
      {/* Div for Heading */}
      <div className="w-full grid justify-center">
        {" "}
        <h1 className="text-3xl bg-white w-max py-4 px-4 mt-3 rounded-md font-bold">
          Results Page
        </h1>
        {/* Div for form background */}
        <div className=" bg-white w-[95vw] py-4 px-4 my-3 rounded-md ">
          <h1 className="text-xl font-semibold">
            Date & Time: <span className="font-bold">{datetime.format('MMMM Do YYYY, h:mm a')}</span>
          </h1>
          <h1 className="text-lg mt-4 font-semibold">
            Vehicle Type: <span className="font-bold">{vehicleData.vehicletype}</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            Fuel Type: <span className="font-bold">{FuelType}</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            {FuelType} Per Liter Cost  : <span className="font-bold">{vehicleData.FuelPrice} Rs</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            Total Amount of {FuelType} fill in tank: <span className="font-bold">{vehicleData.TotalAmount} Rs</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            {FuelType} Density: <span className="font-bold">{vehicleData.FuelDensity}</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            Total Mileage given by your {vehicleData.vehicletype}: <span className="font-bold">{TotalMileage.toFixed(2)} kms</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            Total {FuelType} get in your {vehicleData.vehicletype} Tank: <span className="font-bold">{FuelgetinTank.toFixed(2)} L</span>
          </h1>
          <h1 className="text-lg mt-1 font-semibold">
            Your {vehicleData.vehicletype} given Mileage for Per liter of {FuelType}:<span className="font-bold"> {Perlitermileage.toFixed(2)} kms</span>
          </h1>
        </div>
      </div>
    </>
  );
}
