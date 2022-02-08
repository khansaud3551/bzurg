import React from "react";
import "./ExploreMarket.css";
import ExploreMarketCard from "./ExploreMarketCard";

function ExploreMarket() {
  return (
    <div className="container-fluid px-5 my-5">
      <h3 className="heading_sec font-700">Explore The Market Place</h3>
      <div className="row py-2">
        <ExploreMarketCard
          img="assets/explore1.png"
          subheading="Build your brand"
          title="Graghic Desgning"
        />
        <ExploreMarketCard
          img="assets/explore2.png"
          subheading="Build your brand"
          title=" Application Development"
        />
        <ExploreMarketCard
          img="assets/explore3.png"
          subheading="Health "
          title="Personal Health Care"
        />
        <ExploreMarketCard
          img="assets/explore4.png"
          subheading="Grow your business "
          title="Video Creator"
        />
      </div>
    </div>
  );
}

export default ExploreMarket;
