import React from "react";
import { toast } from "react-hot-toast";

const usePayment = () => {
  const pay = async (price) => {
    try {
      //sending the price field
      const res = await fetch("http://localhost:5000/api/pay/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      });

      const responce = await res.json(); // this  has the messge and the amount

      if (responce.error) {
        throw new Error(responce.error);
      }

      //displaying the message on the screen
      toast.success(responce.message);
      console.log(responce);

      //Razorpay verification
      const resKey = await fetch("http://localhost:5000/api/key", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const { key } = await resKey.json();
      console.log(key);

      const options = {
        key: key, // Enter the Key ID generated from Razorpay Dashboard
        amount: responce.amount, // Amount in currency subunits
        currency: "INR",
        name: "sanji",
        description: "Test Transaction",
        order_id: responce.id, // Order ID from Razorpay
        // callback_url: "http://localhost:5000/api/pay/paymentVerify",
        handler: async function (response) {
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          };
          const verificationResponse = await fetch('http://localhost:5000/api/pay/paymentVerify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          const verificationResult = await verificationResponse.json();
          alert(verificationResult.status);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

      //------------------
    } catch (err) {
      console.log(`erro while sending payment ${err}`);
      toast.error(err.message);
    }
  };

  return { pay };
};

export default usePayment;
