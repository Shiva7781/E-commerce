import React from "react";

const Success = () => {
  return (
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

      <button
        style={{
          border: "none",
          width: 151,
          borderRadius: 5,
          padding: "25px",
          letterSpacing: 1.23,
          backgroundColor: "teal",
          color: "white",
          fontSize: 15,
          fontWeight: "777",
          cursor: "pointer",
        }}
      >
        Payment Successfull!
      </button>
      <p
        style={{
          width: 251,
          fontWeight: "654",
        }}
      >
        Your order is being prepared 😊 Thanks for choosing Shiva Shop!
      </p>
    </div>
  );
};

export default Success;
