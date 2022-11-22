import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 21px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ fontSize: "18px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 21px;

  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 555;
  margin-right: 21px;

  ${mobile({ marginRight: "0px" })}
`;

const Seletect = styled.select`
  padding: 10px;
  margin-right: 21px;

  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  // console.log("location:", location.pathname.split("/")[2]);
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");
  // console.log("filters:", filters);

  const handleFilters = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilters({ ...filters, [name]: value });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Seletect name="color" onChange={handleFilters}>
            <Option defaultValue="">Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Seletect>
          <Seletect name="size" onChange={handleFilters}>
            <Option defaultValue="">Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Seletect>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Seletect onChange={(e) => setSort(e.target.value)}>
            <Option defaultValue="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Seletect>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
