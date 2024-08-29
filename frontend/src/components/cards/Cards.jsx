import React from "react";
import "./cards.css";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <Card
          heading={"UpTo 5GB Storage"}
          level={"Base Layer of Security"}
          price="free"
        />
        <Card
          heading={"UpTo 50GB Storage"}
          level={"High Layer of Security"}
          price="RS 500"
        />
        <Card
          heading={"UpTo 200GB Storage"}
          level={"3 Layers of Security"}
          price="RS 1200"
        />
      </div>
    </>
  );
};

export default Cards;
