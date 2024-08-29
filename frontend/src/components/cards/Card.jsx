import React from "react";
import "./cards.css";
import Button from "react-bootstrap/Button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import usePayment from "../../hooks/usePayment";

const Card = (props) => {
  const { pay } = usePayment();

  const handlePay = async () => {
    const price = props.price.split(" ")[1];
    await pay(price);
  };

  return (
    <div className="price-cards">
      <h4>
        <b>{props.heading}</b>
      </h4>
      <h5>
        <b>{props.level}</b>
      </h5>
      <IoIosCheckmarkCircleOutline size={50} />
      <br />
      <BsDatabaseFillCheck size={50} />
      <br />
      <IoShieldCheckmarkSharp size={50} />
      <br />
      <div className="d-grid gap-2 m-3">
        <Button variant="outline-light" size="lg" onClick={handlePay}>
          {props.price}
        </Button>
      </div>
    </div>
  );
};

export default Card;
