import React, { Component } from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  width: 100%;
  background: url("./images/coding.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  display: inline-block;
  padding: 200px 0;
  text-align: center;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: 38px;
  text-shadow: 1px 1px #555;
  color: #fffafa;
`;

const Line = styled.div`
  width: 100%;
  background-color: #4f4f4f;
  height: 3px;
`;

class Jumbotron extends Component {
  render() {
    return (
      <ImageDiv>
        <Title>Hi, I'm AJ Longstreet. A FullStack JavaScript developer.</Title>
        <Line />
      </ImageDiv>
    );
  }
}

export default Jumbotron;
