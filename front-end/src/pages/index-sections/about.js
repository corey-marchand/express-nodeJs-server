import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/img/coder-icon.jpg';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
    h2 {
        font-weight: lighter;
        font-size: 60px;
        text-align: center;
        color: white;
    }

    div.styles {
        content-align: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-color: #1A2126;
        border: double #1A2126;
    }

    p {
        text-align: center;
        color: white;
    }

    .img {
        margin-left: 15%;
        margin-right: 15%;
        content-align: center;
        width: 70%;
    }
    .background {
        background-color: #1A2126;
    }
`;


const About = () => (
    <div id="about">
        <Styles>
            <div className="background">
            <Container>
                    <h2>About Me</h2>
                    <br />
                    <div className="styles"></div>
                    <br />
                    <br />
                    <img className="img" src={Icon} alt="developer-icon" />
                    <p>I am a full-stack JavaScript/Python Software Developer located outside of the Seattle area.  Before becoming a Software Developer, I worked as a Sales Rep for a flooring company.  After working there for two years, I decided that it was not the career for myself.  The day to day task was the same thing everyday and I am somebody that needs variation.  That is when I discovered coding and fell in love with it.  I loved the challenges I faced everyday, the constant tinkering, and the challenges I constantly faced everyday.  I'm a big believer of always trying to learn new things, so naturally I fell in love with trying to master coding. Even though I am far from being a master at coding, I strive to become better with everyday that passes.</p>
            </Container>
            </div>
        </Styles>
    </div>
)

export default About;