import React from "react";

const Summary: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
};

export default Summary;
