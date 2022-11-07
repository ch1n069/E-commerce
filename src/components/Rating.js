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
              ? "bx bxs-star-half"
              : "bx bx-star"
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "bx bxs-star"
              : value >= 1.5
              ? "bx bxs-star-half"
              : "bx bx-star"
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "bx bxs-star"
              : value >= 2.5
              ? "bx bxs-star-half"
              : "bx bx-star"
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "bx bxs-star"
              : value >= 3.5
              ? "bx bxs-star-half"
              : "bx bx-star"
          }
        ></i>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "bx bxs-star"
              : value >= 4.5
              ? "bx bxs-star-half"
              : "bx bx-star"
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
