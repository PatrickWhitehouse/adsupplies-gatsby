import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import logo from "../images/logo.png"


const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        padding: 15px;
        li {
            display: inline-block;
            list-style: none;
            margin-left: 15px;
        }
        li:first-child{
            margin-right: auto;
            margin-left: 0;
        }
    }
`

const Navigation = () => {
    return (
        <Nav>
            <ul>
                <li><Link to="/"><img src={logo} width={90}/></Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/waste-management">Waste Management</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Nav>

    )
}

export default Navigation;