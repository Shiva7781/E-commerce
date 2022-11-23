import React from "react";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";
// import { userRequest } from "../requestMethods";

const Success = () => {
  // const location = useLocation();

  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);

  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item._quantity,
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch (err) {
  //       console.log("err:", err);
  //     }
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://user-images.githubusercontent.com/97456472/202926887-9d48d6ad-ba57-4f2a-8da3-37c7d49e1da8.jpg"
          alt="Shiva Shop"
          style={{
            width: 83,
            height: 83,
            marginBottom: 23,
            borderRadius: 55,
          }}
        />

        {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button> */}

        <p
          style={{
            width: 251,
            fontWeight: "654",
          }}
        >
          Your order is being prepared 😊 Thanks for choosing Shiva Shop!
        </p>

        <Link to="/">
          <button
            style={{
              border: "none",
              width: 151,
              borderRadius: 5,
              padding: "25px",
              letterSpacing: 1.23,
              backgroundColor: "teal",
              color: "white",
              fontSize: 18,
              fontWeight: "777",
              cursor: "pointer",
            }}
          >
            Go to Homepage
          </button>
        </Link>
      </div>
    </>
  );
};

export default Success;
