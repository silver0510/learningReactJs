import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const Products = () => <h2>Products</h2>;

function App() {
      return (
        <Router>
          <div className="App">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">Products</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
            <Route path="/" exact component = {Index} />
            <Route path="/about/" component = {Products} />
          </div>
        </Router>  
      ); 
  }

export default App;
