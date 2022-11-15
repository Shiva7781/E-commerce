import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 21px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 21px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 555;
  margin-right: 21px;
`;

const Seletect = styled.select`
  padding: 10px;
  margin-right: 21px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Seletect>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Seletect>
          <Seletect>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Seletect>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Seletect>
            <Option selected> Newest </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Seletect>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
