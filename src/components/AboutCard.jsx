import React from "react";

function AboutCard({ num, title, desc }) {
  return (
    <div>
      <div>
        <span className="bg-gray-400 p-1 mx-2">{num}</span>
        <span>{title}</span>
      </div>
      <div>{desc}</div>
    </div>
  );
}

export default AboutCard;
