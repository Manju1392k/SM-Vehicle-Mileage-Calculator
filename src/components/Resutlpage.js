/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import moment from "moment-timezone";

export default function Resutlpage() {
  try {
  } catch (error) {
    toast("Something went wrong. Please try later");
  }

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
        </div>
      </div>
    </>
  );
}
