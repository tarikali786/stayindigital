import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const ServiceHero = () => {
  return (
    <div className=" global-bg-2 md:h-[50vh] h-[36vh] text-white flex common-padding flex-col justify-center">
      <h1 className="md:text-4xl text-3xl mb-4">Services</h1>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          "& .MuiBreadcrumbs-separator": { opacity: 0.6, color: "gray" }, // Icon color 60% gray
        }}
      >
        <Link
          underline="hover"
          href="/"
          sx={{ opacity: 0.6, color: "#e2e2e2" }} // Home text 60% gray
        >
          Home
        </Link>
        <Typography sx={{ color: "#e2e2e2" }}>Services</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default ServiceHero;
