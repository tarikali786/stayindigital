import React from "react";

const ServiceDetails = ({ params }) => {
  return (
    <div>
      <div className="text-white common-padding min-h-[40vh] flex  items-center">
        <h1>Service Details :{params.service_slug}</h1>
      </div>
    </div>
  );
};

export default ServiceDetails;
