import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
//
// const Nav = {
//     backgroundColor: "#f8f8f8",
//     borderWidth: "0 0 1px",
//     borderColor: "#e7e7e7",
//     zIndex: 1000,
//     paddingRight: "15px",
// paddingLeft: "15px",
// marginRight: "auto",
// marginLeft: "auto"
// };
// const Link = {
//     margin: "5px",
//     textDecoration: "none",
//     color: "black"
// };

export function Header() {
    const routes = [
        {to: '/istream', title: 'iStream'},
        {to: '/loyalty', title: 'loyalty'},
        {to: '/payback', title: 'payback'},
        {to: '/schedule', title: 'schedule'},
        {to: '/batchman', title: 'batchman'},
        {to: '/dictionary', title: 'dictionary'},
    ];
    return (
        <>
            <Navbar bg="light" variant="light" fixed="top" style={{margin: "0 auto", width: "1170px"}}>
                <Navbar.Brand  as={Link} to="/istream">r-dash</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {routes.map((route, i) => (
                            <NavItem key={i} href={route.to}>
                                <Nav.Link as={Link} to={route.to}>{route.title}</Nav.Link>
                            </NavItem>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/istream">Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
