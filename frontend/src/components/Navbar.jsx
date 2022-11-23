import React from "react";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Styled components
const Container = styled.div`
  height: 77px;
  display: grid;
  align-content: center;
  background-color: #ff5500;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  letter-spacing: 1.23px;
  font-weight: 678;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  width: 73%;
  border: 0.7px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 7px;
  padding: 5px;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  letter-spacing: 1.23px;
  font-weight: 786;

  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  letter-spacing: 1.23px;
  font-weight: 687;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  // const cart = useSelector((state) => state.cart);
  // console.log("cart:", cart);

  const quantity = useSelector((state) => state.cart.quantity);
  // console.log("quantity:", quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "21" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>SHIVA</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>

          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem>
              <Badge
                overlap="rectangular"
                badgeContent={quantity}
                color="primary"
              >
                <ShoppingCartOutlined style={{ width: "33", height: "33" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
