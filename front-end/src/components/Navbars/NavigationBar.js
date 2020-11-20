import React from 'react';
import  styled  from 'styled-components';
import { Link } from 'react-scroll';

const Styles = styled.div`
    .navbar {
        background-color: #1A2126;
        height: 80px;
        width:90%;
        color: white;
        font-size: 30px; 
        margin-left: auto;
        margin-right: auto; 
    }

    .navbar:hover {
        cursor: pointer;
    }

    .navbar-container {
        background-color: #1A2126;
    }
`;

class NavigationBar extends React.Component {
    render() {
        return (
            <Styles>
                <div className="navbar-container">
                <div className="navbar">
                        <Link
                            className="link"
                            activeClass="active" 
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Home
                        </Link>
                        <Link
                            className="link"
                            activeClass="active" 
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About
                        </Link>
                        <Link
                            className="link"
                            activeClass="active" 
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Portfolio
                        </Link>
                        <Link
                            className="link"
                            activeClass="active" 
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact
                        </Link>                
                    </div>
                </div>
            </Styles>
        )
    }
}

export default NavigationBar;
