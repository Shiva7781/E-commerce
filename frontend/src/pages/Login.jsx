import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../redux/userRedux";
import { Link as RouterLink } from "react-router-dom";

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
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledRouterLink = styled(RouterLink)`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  color: inherit; // use inherited text color
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(clearError());

    // eslint-disable-next-line
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD</Link>
          <StyledRouterLink to="/register">CREATE A NEW ACCOUNT</StyledRouterLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
