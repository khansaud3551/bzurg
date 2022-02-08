import React from "react";

function PosterHome() {
  return (
    <div className="container-fluid px-5 my-3 my-md-4 position-relative">
      <img className="res_mobile" src="assets/homeposter.png" alt="" />
      <div className="inner_card  h-100 d-flex align-items-center px-5">
        <div className="ms-2">
          <h1>Earn With Skynet</h1>
          <p>
            Join the billion dollar Skynet market and provide your services
            worldwide.
          </p>
          <button className="btn bg-prim text-white px-3 py-2">
            Become a service provider
          </button>
        </div>
      </div>
    </div>
  );
}

export default PosterHome;
