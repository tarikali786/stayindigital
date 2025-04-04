"use client";

import { TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen common-padding sm:py-4 py-10">
      <div className="w-full rounded-lg shadow-lg relative flex flex-col  md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-6 justify-between w-full md:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-1/3  ">
            <div className="flex gap-2 items-center">
              <LocationOnIcon className="text-primary" />
              <p>Location Address</p>
            </div>
            <p className="text-sm pl-5 mt-2 text-gray-700">
              24/59, KANDAPPA STREET, PURASAWALKAM, CHENNAI 600 007 OPPOSITE TO
              T.E.L.C SCHOOL, LANDMARK - SARAVANA STORE
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md  h-1/3  ">
            <div className="flex gap-2 items-center">
              <EmailIcon className="text-primary" />

              <p>Email Address</p>
            </div>
            <p className="text-sm pl-8 mt-2 text-gray-700">
              info@stayindigital.com
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md  h-1/3 ">
            <div className="flex gap-2 items-center">
              <CallIcon className="text-primary" />

              <p>Phone Number</p>
            </div>
            <p className="text-sm pl-8 mt-2 text-gray-700">
              7010189959 <br />
              7200400653
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3 bg-white rounded-2xl md:p-8 p-6">
          <h2 className="md:text-2xl text-xl font-bold">
            Let's Convert Your Idea into Reality
          </h2>
          <p className="text-gray-600 mt-4">Drop A Line</p>

          <form className="mt-8 space-y-6">
            <div className="flex sm:flex-row flex-col gap-4">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                size="medium"
                className="bg-gray-100"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                size="medium"
                className="bg-gray-100"
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-4">
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                size="medium"
                className="bg-gray-100"
              />
              <TextField
                fullWidth
                label="Upload File"
                variant="outlined"
                size="medium"
                className="bg-gray-100"
                type="file"
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              size="medium"
              className="bg-gray-100"
              multiline
              minRows={6}
            />

            <button
              type="submit"
              className="bg-[#716af2] text-white text-lg w-full py-2 mt-6 rounded-md cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
