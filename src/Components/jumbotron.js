import React, { Component } from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: url("./images/coding.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  text-shadow: 1px 1px rgb(88, 88, 88, 0.8);
  color: #fffafa;
`;

const DownArrow = styled.span`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
`;

class Jumbotron extends Component {
  render() {
    return (
      <ImageDiv>
        <Title>Hi, I'm AJ Longstreet. A FullStack JavaScript developer.</Title>
        <DownArrow />
      </ImageDiv>
    );
  }
}

export default Jumbotron;
