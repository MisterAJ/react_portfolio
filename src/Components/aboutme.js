import React, { Component } from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding: 50px;
  background: url("./images/trail.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledBio = styled.div`
    width: 70%
    max-width: 1200px;
    margin: auto;
    padding: 50px;
    display: inline-block;
    border-radius: 15px;
    background-color: rgba(190, 190, 190, 0.95);
    box-shadow: 8px 10px 8px rgba(75, 75, 75, 0.8);
`;

const StyledP = styled.p`
  display: inline-block;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
`;

class AboutMe extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledBio>
          <StyledP>Bio Here</StyledP>
        </StyledBio>
      </StyledContainer>
    );
  }
}

export default AboutMe;
