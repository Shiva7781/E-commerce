import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51M6Fh3SGPTOGS94jBXoMNdJQLVJZYdJs04mTgunNBX26gwyMn3q4cC6A3SNGxM2OMwn8cn4p5nFTTm2FUSkZgYIt00On7hctBa";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log("token:", token);
    navigate("/success");

    setStripeToken(token);
  };

  useEffect(() => {
    stripeToken && makePayment();

    // eslint-disable-next-line
  }, [stripeToken]);

  const makePayment = async () => {
    try {
      const res = await axios.post(
        "https://shiva-e-commerce.herokuapp.com/api/checkout/payment",
        {
          tokenId: stripeToken.id,
          amount: 778100,
        }
      );

      console.log("res", res.data);
      // navigate("/success");
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {stripeToken ? (
        <span>Processing Pease wait...</span>
      ) : ( */}
      <StripeCheckout
        name="Shiva Shop"
        image="https://user-images.githubusercontent.com/97456472/202922290-bb86bdeb-692d-41dd-9bb5-72dc9005fcaf.png"
        billingAddress
        shippingAddress
        description="Your total is ₹ 7781"
        amount={7781 * 0.0123}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 145,
            borderRadius: 5,
            padding: "20px",
            letterSpacing: 1.23,
            backgroundColor: "teal",
            color: "white",
            fontWeight: "777",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
      {/* )} */}
    </div>
  );
};

export default Pay;
