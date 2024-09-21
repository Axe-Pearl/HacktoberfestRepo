//Approach1
import { useState } from "react";
import "../App.css";

const Accordion = ({ accordionData }) => {
  const [data, setData] = useState(accordionData);
  const handleClick = (itemId) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, display: !item.display };
        } else {
          return { ...item, display: false };
        }
      })
    );
  };
  return (
    <div>
      {data.map((item) => (
        <div className="accordion">
          <h2 onClick={() => handleClick(item.id)} className="accordion-title">
            {item.title}
          </h2>
          {item.display && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
