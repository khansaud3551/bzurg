import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function TopServiceCard({ img, name, servicename, description, rating }) {
  return (
    <div className="child">
      <img src={img} alt="" />

      <div className="service-body border border-top-0  rounded-b-1 p-2">
        <div className="d-flex justify-content-between">
          <h5 className="m-0 xl_text">{name}</h5>
          <h5 className="m-0 xl_text">
            <HeartIcon className="heart_icon" />
          </h5>
        </div>
        <p className="m-0 md_text ">{servicename}</p>
        <p className="sm_text m-0 para_text mt-1">{description}</p>

        <p className="mt-1 mb-2 md_text d-flex">
          {Array(rating)
            .fill(4)
            .map((_, i) => (
              <StarIcon className="star_icon" key={i} />
            ))}
        </p>
        <button className="btn border border-2 w-100 mx-auto">Hire</button>
      </div>
    </div>
  );
}

export default TopServiceCard;
