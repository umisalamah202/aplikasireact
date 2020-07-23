import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { value, setValue } = useContext(CartContext)

  return (
    <div>
      
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">Katagori</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/barang" className="nav-link">Barang</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/useeffects" className="nav-link">Data Barang</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/produk" className="nav-link">Produk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/reducer" className="nav-link">Pembelian</NavLink>
            </NavItem>

          </Nav>
          <NavbarText>
          <NavItem>
              <NavLink to="/login" className="nav-link">login</NavLink>
              <hr/>
            </NavItem>

          </NavbarText>
          
          
          <NavbarText>
            <Button color="danger">
              <i className="fa fa-shopping-cart"></i>
              <span className="badge badge-light">{value}</span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>

  )
}

export default NavbarComp
