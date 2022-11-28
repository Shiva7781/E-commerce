import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 88%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  margin: 3px;
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 7px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 37px;
  height: 37px;
  font-size: 18px;
  border-radius: 1.23px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 3px solid teal;
  background-color: white;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  // console.log("location:", location.pathname.split("/")[2]);
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);

        setProduct(res.data);
      } catch (err) {
        console.log("err:", err);
      }
    };

    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    alert("Item added to cart successfully");
  };

  return (
    <Container>
      {/* <Navbar /> */}
      {/* <Announcement /> */}
      <Wrapper>
        <ImgContainer>
          {/* <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"></Image> */}
          <Image src={product.img}></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc} </Desc>
          <Price>₹ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              {product.color?.map((col, i) => (
                <FilterColor
                  key={i}
                  color={col}
                  onClick={() => setColor(col)}
                />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((siz, i) => (
                  <FilterSizeOption key={i}>{siz} </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{
                  cursor: "pointer",
                  width: 30,
                  height: 30,
                  borderRadius: 11,
                  border: "1px solid teal",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 5px",
                }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{
                  cursor: "pointer",
                  width: 30,
                  height: 30,
                  borderRadius: 11,
                  border: "1px solid teal",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 5px",
                }}
              />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
