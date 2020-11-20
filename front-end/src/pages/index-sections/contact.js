import React from 'react';
import ContactForm from 'components/Form/Form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
    h2 {
        font-weight: lighter;
        font-size: 60px;
        text-align: center;
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
    }
    
    .button-linkedin {
        width: 300px;
        height: 75px;
        margin-left: 200px;
        align-items: center;
    }

    .button-email {
        width: 300px;
        height: 75px;
        margin-right: 200px;
        align-items: center;
    }

    .button-container {
        height: auto;
        justify-content: space-between;
        display: flex;
        top: 30px;
    }

    .myButton {
        box-shadow:inset 0px 0px 3px 0px #91b8b3;
        background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
        background-color:#768d87;
        border-radius:42px;
        border:12px solid #566963;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:28px;
        font-weight:bold;
        padding:32px 76px;
        text-decoration:none;
        text-shadow:1px 0px 1px #2b665e;
        margin-left: 185px;
    }

    .myButton:hover {
        background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
        background-color:#6c7c7c;
    }

    .myButton:active {
        position:relative;
        top:1px;
    }
    
    .myButton-2 {
        box-shadow:inset 0px 0px 3px 0px #91b8b3;
        background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
        background-color:#768d87;
        border-radius:42px;
        border:12px solid #566963;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:28px;
        font-weight:bold;
        padding:32px 76px;
        text-decoration:none;
        text-shadow:1px 0px 1px #2b665e;
        margin-right: 185px;
    }

    .myButton-2:hover {
        background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
        background-color:#6c7c7c;
    }

    .myButton-2:active {
        position:relative;
        top:1px;
    }
`;

const Contact = () => (
    <Styles>
        <Container>
        <div id="contact" className="button-container">
            <a className="myButton" href="https://www.linkedin.com/in/corey-marchand/">LinkedIn</a>
            <a className="myButton-2" href="mailto:corey.marchand@me.com">Email Me</a>
        </div>
        <br />
        </Container>
    </Styles>
)

export default Contact;