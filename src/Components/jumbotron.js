import React, { Component } from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: url("./images/coding.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  display: inline-block;
  padding: 40vh 0px;
  text-align: center;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  vertical-align: middle;
  text-shadow: 1px 1px rgb(88, 88, 88, 0.8);
  color: #fffafa;
`;

class Jumbotron extends Component {
  render() {
    return (
      <ImageDiv>
        <Title>Hi, I'm AJ Longstreet. A FullStack JavaScript developer.</Title>
      </ImageDiv>
    );
  }
}

export default Jumbotron;
