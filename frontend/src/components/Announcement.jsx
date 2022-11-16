import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 55px;
  background-color: #11d143;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  position: relative;
`;

const AnimationContainer = styled.span`
  height: 55px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: AnnouncementMSG;
  animation-duration: 11s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes AnnouncementMSG {
    from {
      left: 70%;
    }
    to {
      left: 0%;
    }
  }
`;

const Image = styled.img`
  width: fit-content;
  height: 51px;
  margin: auto;
`;

const Title = styled.h3`
  display: block;
  margin: auto;
  color: black;
`;

const Announcement = () => {
  return (
    <Container>
      <AnimationContainer>
        <Image src="https://media.tenor.com/Nfb3OcvwVKgAAAAj/%E3%83%80%E3%83%B3%E3%82%B9-%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%BC.gif" />
        <Title>Super Deal Live Now Hurry Up!</Title>
        <Image src="https://media.tenor.com/Nfb3OcvwVKgAAAAj/%E3%83%80%E3%83%B3%E3%82%B9-%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%BC.gif" />
      </AnimationContainer>
    </Container>
  );
};

export default Announcement;
