//Approach2
// This is another approach for the accordion Component
import React, { useState } from "react";
import "../App.css";
function Accordion2({ accordionData }) {
  const [active, setActive] = useState(null);
  const handleClick = (itemId) => {
    setActive((prev) => (prev === itemId ? null : itemId));
  };
  return (
    <div>
      {accordionData.map((item, index) => (
        <div className="accordion">
          <h2 onClick={() => handleClick(index)} className="accordion-title">
            {item.title}
          </h2>
          {active == index&& <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion2;
