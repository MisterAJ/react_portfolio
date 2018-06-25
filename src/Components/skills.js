import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 15px;
  background: url("./images/deck.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledFlexContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`;

const StyledColumn = styled.div`
  width: 32%;
  max-width: 500px;
  margin: auto;
  border-radius: 10%;
  background-color: rgba(190, 190, 190, 0.95);
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  box-shadow: 8px 10px 8px rgba(75, 75, 75, 0.8);
`;

const StyledHeader = styled.h3`
  color: #2f3036;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
`;

const StyledP = styled.p`
  color: #2f3036;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
`;

class Skills extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledFlexContainer>
          <StyledColumn>
            <StyledHeader>Languages</StyledHeader>
            <StyledP>JavaScript</StyledP>
            <StyledP>HTML5</StyledP>
            <StyledP>CSS3</StyledP>
            <StyledP>SQL</StyledP>
            <StyledP>Python</StyledP>
            <StyledP>Java</StyledP>
            <StyledP>C#</StyledP>
          </StyledColumn>
          <StyledColumn>
            <StyledHeader>
              Frameworks<br />& Libraries
            </StyledHeader>
            <StyledP>React/Redux</StyledP>
            <StyledP>AngularJS</StyledP>
            <StyledP>Gatsby</StyledP>
            <StyledP>Flask</StyledP>
            <StyledP>Django</StyledP>
            <StyledP>Backbone.JS</StyledP>
            <StyledP>jQuery</StyledP>
            <StyledP>Spring</StyledP>
            <StyledP>Spark</StyledP>
          </StyledColumn>
          <StyledColumn>
            <StyledHeader>Related Skills</StyledHeader>
            <StyledP>Troubleshooting</StyledP>
            <StyledP>Project Management</StyledP>
            <StyledP>Mentoring</StyledP>
            <StyledP>System Administration</StyledP>
            <StyledP>Network Design</StyledP>
            <StyledP>Business Writing</StyledP>
            <StyledP>Customer Analysis</StyledP>
          </StyledColumn>
        </StyledFlexContainer>
      </StyledDiv>
    );
  }
}

export default Skills;
