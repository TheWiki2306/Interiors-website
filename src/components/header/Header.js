import React from "react";
import SmallContainer from "./smallContainer";
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <nav>
            <div className="container nav__container">
                <div className="nav__container-large">
                    <p>Fi<span>Design</span></p>

                    <ul className="list-items">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/projects">
                            <li>Works</li>
                        </Link>
                        <li>Services</li>
                        <li>Contact us</li>
                        <li>News</li>
                        <div className="signup">
                            <Link to="/signup">
                                Sign up
                            </Link>
                        </div>
                    </ul>
                </div>
                <SmallContainer />

            </div>
        </nav >
    )
}

export default Header;
