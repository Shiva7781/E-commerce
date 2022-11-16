import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5),
      rgba(0, 255, 60, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  font-size: 18px;
  background-color: transparent;
  outline: none;

  flex: 1;
  min-width: 40%;
  margin: 21px 11px 0 0;
  padding: 11px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 21px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin: 11px 0 0;
  padding: 15px 21px;
  color: white;
  background-color: teal;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
