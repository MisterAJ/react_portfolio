import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  background-color: #d4d4d4;
`;

const StyledContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 40px;
  padding: 15px 5px;

  &:hover {
    opacity: 0.6;
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledContainer>
          <a
            href="https://github.com/MisterAJ/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <StyledImage src="/images/social/github.svg" />
          </a>
          <a
            href="https://www.instagram.com/misterajl/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <StyledImage src="/images/social/instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/misteraj/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <StyledImage src="/images/social/linkedin.svg" />
          </a>
          <a
            href="https://medium.com/@AJLongstreet"
            target="_blank"
            rel="noreferrer noopener"
          >
            <StyledImage src="/images/social/medium.svg" />
          </a>
          <a
            href="https://twitter.com/AJLongstreet"
            target="_blank"
            rel="noreferrer noopener"
          >
            <StyledImage src="/images/social/twitter.svg" />
          </a>
        </StyledContainer>
      </StyledFooter>
    );
  }
}

export default Footer;
