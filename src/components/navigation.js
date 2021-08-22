import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import logo from "../images/logo.png"


const Nav = styled.nav`
    position: ${props => props.absolute ? 'absolute' : 'static'};
    top: ${props => props.absolute ? '15px' : '0'};
    right:15px;
    left:15px;
    ul {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        li {
            display: inline-block;
            list-style: none;
            margin-left: 15px;
            a{
                color: ${props => props.absolute ? '#fff' : '#000'};
                font-weight: 700;
            }
            a:hover {
                text-decoration: underline;
            }
        }
        li:first-of-type{
            margin-right: auto;
            margin-left: 0;
        }
    }
`

const Navigation = ({absolute}) => {
    return (
        <Nav absolute={absolute}>
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