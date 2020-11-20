import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
import NavigationBar from "components/Navbars/NavigationBar.js";

import Portfolio from "../pages/index-sections/portfolio";
import About from "../pages/index-sections/about";
import Contact from "../pages/index-sections/contact";
import styled from 'styled-components';

const Styles = styled.div`
  .main {
    background-color:  #1A2126;
  }
`;

function Index() {
  return (
    <>
      <NavigationBar id="main"/>
      <IndexHeader />
      <Styles>
      <div className="main">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <About id="about"/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Portfolio id="portfolio"/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Contact id="contact"/>
        <br />
        <br />
        <br />
        <br />
      </div> 
      </Styles>
    </>
  );
}

export default Index;
