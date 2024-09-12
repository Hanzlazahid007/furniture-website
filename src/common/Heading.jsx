import React from "react";

const Heading = ({ heading }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold capitalize  text-center mb-10">
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
