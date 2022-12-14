import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import axios from "axios";

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

const Products = ({ cat, filters, sort }) => {
  console.log("cat, filters, sort :", cat, filters, sort);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log("filteredProducts:", filteredProducts);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://shivashop.onrender.com/api/products?category=${cat}`
            : `https://shivashop.onrender.com/api/products`
        );
        setProducts(res.data);

        // console.log("axios", res.data);
      } catch (err) {
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

        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .slice(0, 9)
              .map((item) => <Product item={item} key={item._id} />)}
      </Container>
    </>
  );
};

export default Products;
