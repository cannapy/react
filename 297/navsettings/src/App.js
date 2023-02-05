import './App.css';
import './index.css';
import { ReactComponent as BellIcon } from 
import React, { useState, useEffect, useRef } from 'react';


function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />}></NavItem>
      <NavItem icon={<BellIcon />}></NavItem>
      <NavItem icon={<MessengerIcon />}></NavItem>
      <NavItem icon={<CaretIcon />}>
        <DropoDownMenu />
      </NavItem>
    </Navbar>
  );
}



const Navbar = (props) => {
  return (
    <>
      <nav className='navbar'>
        <ul className="navbar-nav">
          {props.children}
        </ul>
      </nav>
    </>
  );
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="nav-item-button">
        <a href="#" className="icon" onClick={() => { setOpen(!open) }}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    </>

  )
}

const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState('main');
  return (
    <div className="dropdown">
      <div className="menu">
        <DropdownItem>My Profile</DropdownItem>

      </div>

    </div>
  )
}
const DropDownItem = (props) => {
  return (
    <a href="#" className="menu-item" onClick={() => props.goToMenu && props.activeMenu}>
      <span className="icon-button">
        {props.leftIcon}
      </span>
      <span className="icon-button">
        {props.leftIcon}
      </span>
    </a>
  )
}

export default App;
