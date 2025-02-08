import React from "react";
import AboutCard from "./AboutCard";
import b from "../assets/b1.jpg";
import aboutdata from "../Data/AboutData";
function About() {
  return (
    <div className="mx-auto" id="about">
      <div className="flex mx-auto align-middle justify-center mt-[50px] shadow-lg w-fit">
        <div className="w-[300px]">
          <img src={b} />
        </div>
        <div className="flex flex-col gap-3">
          {aboutdata.map((data) => (
            <AboutCard num={data.number} title={data.title} desc={data.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
