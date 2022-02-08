import React from "react";
import "./Banner.css";
import { SearchIcon } from "@heroicons/react/outline";

function Banner() {
  return (
    <div className="container  d-flex justify-content-center align-items-center h-100">
      <div>
        <h1 className="banner-heading font-700">
          Find The Perfect Freelance Services For Your Business
        </h1>
        <div className="banner-input">
          <input
            className="w-100 h-100 input-style"
            placeholder={`Search for freelancers, services, or projects`}
            type="text"
          />
          <button className="btn bg-prim text-white rounded-0 px-5 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
