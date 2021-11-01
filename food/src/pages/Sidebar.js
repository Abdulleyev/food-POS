import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="/icons/logo.png" alt="logo.png"/>
            <ul className="nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link "><span className="icon icon-home"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="icon icon-home"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="icon icon-home"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="icon icon-home"/></Link>
                </li>


                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="icon icon-home"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="icon icon-home"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="icon icon-home"/></Link>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;