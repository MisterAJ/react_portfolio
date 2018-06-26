import React, { Component } from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  background: url("./images/trail.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledBio = styled.div`
    width: 50%
    max-width: 800px;
    margin: auto;
    padding: 50px;
    display: inline-block;
    border-radius: 15px;
    background-color: rgba(190, 190, 190, 0.95);
    box-shadow: 8px 10px 8px rgba(75, 75, 75, 0.8);
    text-align: left;
`;

const StyledP = styled.p`
  display: inline-block;
  color: #2f3036;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  text-shadow: 1px 1px 1px rgb(128, 128, 128, 0.7);
  font-size: 1.1rem;
`;

class AboutMe extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledBio>
          <StyledP>
            Thanks for stopping by my page! My name is AJ, but you probably
            already know that. I live in a little place called Guelph, Ontario.
            It's a pretty cool spot. Quaint shops and diverse culture make it a
            pleasure to call this city my home.
            <br />
            <br />
            I'm a very active guy. Often you'll see me going to the gym, cycling
            or rock climbing. It helps me balance my other three passions, video
            games, development and audiobooks. Man do I love audiobooks.
            Nonfiction, sci-fi and epic fantasy steal me away for many hours
            every month. If you ever want to chat about that stuff, I'm always
            game.
            <br />
            <br />
            I'm pretty sure you came here to find out a bit more about me
            professionally, so here it is.
            <br />
            <br />
            I've been an entrepreneur for the past few years. It has given me
            deep insight into many of the different roles in an organisation. As
            the owner of a small business, you wear all the hats. Project
            management, billing, scheduling, customer support all fell under my
            umbrella. I had to become acutely aware of the needs of my customers
            to provide them with the solutions that fit their needs
            appropriately. In the security industry, software is complicated and
            hard to use. I looked to web development to leverage the existing
            APIs provided by equipment manufacturers to provide an easy to use
            interface for their systems. So I started learning.
            <br />
            <br />
            Then I fell in love with the process.
            <br />
            <br />
            I started with Java and after a few months realized that although I
            got to solve some interesting problems, I didn't get to reach out to
            users directly. So I moved over to JavaScript. Being able to bridge
            the gap between machine and user through HTML/CSS/JS was awesome. I
            had access to most of the power of a compiled language with the
            added ability to be able to run it anywhere. The rapidly evolving
            nature of JavaScript brings more stability and performance with
            every iteration. I like to stay agile to adapt as things change and
            the pace that JS keeps allows me to do that.
            <br />
            <br />
            I've dedicated large chunks of my personal and professional time to
            build and improve my skills in web development, and I look forward
            to any project that I can put my mind behind. I started helping out
            with the Treehouse FullStack JavaScript Techdegree program in June
            of 2017 doing peer review and was brought on as a student success
            specialist a few months later. Mentoring the students at Treehouse
            has given me valuable insight into the many different ways that
            people can approach a problem and where they tend to trip up.
            Flexing my debugging skills to get them through their projects has
            been great practice. Along with the time spent at Prodigy and
            developing apps for my customers. I've become a pretty solid
            developer.
            <br />
            <br />
            I bring a lot to the table, a comprehensive skill set, business
            experience and a passion for learning. If your company is looking to
            get the best bang for its buck, please feel free to reach out to me,
            and we can chat.
          </StyledP>
        </StyledBio>
      </StyledContainer>
    );
  }
}

export default AboutMe;
