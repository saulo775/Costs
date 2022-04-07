import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../Container";
import logo from "../../../assets/coin.png"
import { Nav } from "./styles"

export function Navbar() {
    return(
        <Nav>
            <Container>
                <Link to={"/"}>
                    <img src={logo}alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/company"}>Company</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contacts</Link>
                    </li>
                </ul>
            </Container>
        </Nav>
    )
    
}