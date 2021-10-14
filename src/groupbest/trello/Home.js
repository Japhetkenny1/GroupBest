import React from "react";
import styled from "styled-components";
import Search from "./search";
import Header from "./header";
import HeroContent from '../HeroContent'
const Home = () => {
  return (
    <Container>
      <Header />
      <HeroContent />
      <Search />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #eae6ff;
`;