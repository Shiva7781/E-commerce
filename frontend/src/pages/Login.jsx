import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 98.9vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5),
      rgba(0, 255, 60, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  /* background-color: white; */

  ${mobile({ width: "77%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  /* font-weight: 333; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 18px;
  background-color: transparent;
  outline: none;

  flex: 1;
  min-width: 40%;
  margin: 11px 0 0;
  padding: 11px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin: 11px 0 0;
  padding: 15px 21px;
  color: white;
  background-color: teal;
  cursor: pointer;
  margin-bottom: 11px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
