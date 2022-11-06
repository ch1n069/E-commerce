import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bxs bxs-star-half"
              : "bx bx-star"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
