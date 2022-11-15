import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: grid;
  place-items: center;
  height: 10vh;
  background-color: cyan;
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
