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

  const [vehicleData, setVehicleData] = useState({});

  useEffect(() => {
    try {
      // Get the data from localStorage
      const storedVehicleData = localStorage.getItem('VehicleData');

      // Parse the data and set it to state
      if (storedVehicleData) {
        setVehicleData(JSON.parse(storedVehicleData));
      }
    } catch (error) {
      toast("Something went wrong. Please try later");
    }
  }, []);

  console.log(vehicleData)

  var FuelType = vehicleData.fueltype

  var TotalMileage = vehicleData.SecondFuelPoint - vehicleData.FirstFuelPoint

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
            Total Mileage by {vehicleData.vehicletype}: <span className="font-bold">{TotalMileage.toFixed(2)} kms</span>
          </h1>
        </div>
      </div>
    </>
  );
}
