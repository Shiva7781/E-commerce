import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 33px;
  background-color: #057474;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal
      <span role="img" aria-label="grinning face with smiling eyes">
        😄
      </span>
      Live Now
    </Container>
  );
};

export default Announcement;
