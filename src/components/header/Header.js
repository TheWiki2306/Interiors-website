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

                    <div className="list-items">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/projects">
                            Works
                        </Link>
                        <Link>
                            Services
                        </Link> 
                       <Link>
                            Contact us
                        </Link> 
                        <Link>
                            News
                        </Link>
                        
                        <div className="signup">
                            <Link to="/signup">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
                <SmallContainer />

            </div>
        </nav >
    )
}

export default Header;
