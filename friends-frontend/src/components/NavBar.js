import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Friends App</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/login">
              <NavLink>Login</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
