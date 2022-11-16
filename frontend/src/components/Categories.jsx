import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Title = styled.h1`
  display: grid;
  place-items: center;
  height: 10vh;
  background-color: cyan;

  ${mobile({ fontSize: "14px", height: "5vh", backgroundColor: "white" })}
`;

const Categories = () => {
  return (
    <>
      <Title> POPULAR CATEGORIES </Title>

      <Container>
        {categories.map((item, i) => {
          return <CategoryItem key={i} item={item} />;
        })}
      </Container>
    </>
  );
};

export default Categories;
