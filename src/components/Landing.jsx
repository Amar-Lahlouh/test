import React from "react";
import landing from "../assets/landing.jfif";
function Landing() {
  return (
    <div className="flex flex-wrap justify-center align-middle mt-[50px]">
      <div className="max-w-[500px] p-4">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          alias Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          perferendis!
        </h5>
        <button>learn More</button>
      </div>
      <div className="w-[300px]">
        <img src={landing} />
      </div>
    </div>
  );
}

export default Landing;
