import React from "react";
export default function Header() {
    return (
        <div id="header">
            <div className="bgr-dark">
                <div className="container py-2 d-flex justify-content-between align-item-center">
                    <div className="logo text-white d-flex justify-content-between align-item-center ">
                        <a className="text-white" style={{fontSize:'20px', lineHeight:'40px'}}>Start Bootstrap</a>
                    </div>
                    <div className="navBar">
                        <nav>
                            <ul className="nav justify-content-center">
                                <li className="nav-item text-white">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item text-white">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item text-white">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item text-white">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}