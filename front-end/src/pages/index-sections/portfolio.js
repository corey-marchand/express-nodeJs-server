import React from 'react';
import PortfolioCard from 'components/Card/Card';
import styled from 'styled-components';
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

    .portfolio-card {
        text-align: center;
        float: right;
    }
`;


const Portfolio = () => (
    <Styles>
        <Container>
        <div id="portfolio">
            <h2>Previous Projects</h2>
            <div className="styles"></div>
            <br />
            <br />
            <PortfolioCard className="portfolio-card"/>
        </div>
        </Container>
    </Styles>
)

export default Portfolio;