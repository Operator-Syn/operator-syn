import { useState, type FC } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

export interface NavLinkItem {
    name: string;
    path: string;
    component?: FC | null; // optional component
}

interface NavBarProps {
    brandName: string;
    links: NavLinkItem[];
}

export default function NavBar({ brandName, links }: NavBarProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className="fixed-top glass"
        >
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                    {brandName}
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)}
                />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {links.map((link) => (
                            <Nav.Link
                                key={link.path}
                                as={NavLink}
                                to={link.path}
                                onClick={() => setExpanded(false)}
                            >
                                {link.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
