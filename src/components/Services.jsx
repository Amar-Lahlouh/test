import React from "react";
import aboutdata from "../Data/AboutData";
import { FaTruck } from "react-icons/fa6";

function Services() {
  return (
    <div className="flex  justify-center align-middle gap-4">
      {aboutdata.map((element) => (
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="">
            <h2 className="card-title bg-slate-300">
              <FaTruck />
              Card title!
            </h2>
            <p className="p-3">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
