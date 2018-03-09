import React from "react";
import BlueBox from "./BlueBox";
import "./../../css/Components/Testimonial.css";

const Testimonial = data => {
  const item = data.data;
  return (
    <div className="testimonial">
      <div className="inner-wrap">
        <div className="quote-icon">"</div>
        <div className="text-wrap">
          <p className="serif">{item.quote["0"].text}</p>
          <p>-{item.author["0"].text}</p>
        </div>
      </div>

      <BlueBox width="250px" height="250px" left="-50px" top="-75px" />
    </div>
  );
};

export default Testimonial;
