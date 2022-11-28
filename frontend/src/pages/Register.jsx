import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 98.9vw;
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
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // console.log("userData:", userData);

  const handleRegister = async () => {
    try {
      // console.log("userData:", userData);

      const res = await userRequest.post("auth/register", userData);

      console.log("res:", res);

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
      console.log("err:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            name="name"
            autoComplete="false"
            onChange={handleSubmit}
          />
          <Input
            placeholder="Mobile Number"
            name="mobile"
            autoComplete="false"
            onChange={handleSubmit}
          />
          <Input
            placeholder="Username"
            name="username"
            autoComplete="false"
            onChange={handleSubmit}
          />
          <Input
            placeholder="Email"
            name="email"
            autoComplete="false"
            onChange={handleSubmit}
          />
          <Input
            placeholder="Password"
            name="password"
            autoComplete="false"
            onChange={handleSubmit}
          />
          <Input
            placeholder="Confirm Password"
            name="cpassword"
            autoComplete="false"
            onChange={handleSubmit}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
