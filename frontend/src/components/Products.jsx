import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: grid;
  place-items: center;
  height: 10vh;
  background-color: cyan;

  ${mobile({ fontSize: "14px", height: "5vh", backgroundColor: "white" })}
`;

const Products = () => {
  return (
    <>
      <Title> POPULAR PRODUCTS </Title>
      <Container>
        {popularProducts.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </Container>
    </>
  );
};

export default Products;
