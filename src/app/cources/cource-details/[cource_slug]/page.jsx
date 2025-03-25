import React from "react";

const CourceDetails = ({ params }) => {
  return (
    <div className="text-white common-padding min-h-[40vh] flex  items-center">
      <h1>Course Details :{params.cource_slug}</h1>
    </div>
  );
};

export default CourceDetails;
