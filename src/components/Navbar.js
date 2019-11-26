// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
//
// export function NavBar(props) {
//     const {classes} = props;
//
//     return (
//         <AppBar position="static" elevation={0}>
//             <Toolbar>
//                 <IconButton className={classes.menuButton} color="contrast" onClick={this.props.toggleDrawer}><MenuIcon/></IconButton>
//                 <Typography className={classes.flex} type="title" color="inherit">
//                     Material-UI Demo App
//                 </Typography>
//                 <div>
//                     <IconButton color="contrast" onClick={this.props.login}>
//                         <AccountCircle/>
//                     </IconButton>
//                 </div>
//             </Toolbar>
//         </AppBar>
//     )
// }


import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "@reach/router";
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
