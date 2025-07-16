import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import axios from "axios";
import { Bars } from 'react-loader-spinner'

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

  ${mobile({ fontSize: "18px", height: "5vh", backgroundColor: "white" })}
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* or a fixed height like 200px */
  width: 100%;
`;

const Products = ({ cat, filters, sort }) => {
  console.log("cat, filters, sort :", cat, filters, sort);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log("filteredProducts:", filteredProducts);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          cat
            ? `https://shivashop.onrender.com/api/products?category=${cat}`
            : `https://shivashop.onrender.com/api/products`
        );
        setProducts(res.data);
        setIsLoading(false);

        // console.log("axios", res.data);
      } catch (err) {
        setIsLoading(false);
        console.log("err:", err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Title> POPULAR PRODUCTS </Title>
      <Container>
        {/* popularProducts */}
        {/* filteredProducts */}

        {isLoading ? (
          <LoaderWrapper>
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              visible={true}
            />
          </LoaderWrapper>
        ) : cat ? (
          filteredProducts.map((item) => <Product item={item} key={item._id} />)
        ) : (
          products.slice(0, 9).map((item) => <Product item={item} key={item._id} />)
        )}
      </Container>
    </>
  );
};

export default Products;
