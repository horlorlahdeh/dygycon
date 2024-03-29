import React from 'react';
import Logo from './Assets/logo_light.png';
import { Link } from 'react-router-dom';
import './Assets/index.css';

const NavBar = () => {
  return (
    <div className="top-nav flex">
      <div className="nav-wrapper">
        <div className="brand">
          <Link to="/#/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links-wrapper ml-auto">
          <ul className="links flex">
            {/* <li className='link'>
            <Link className='link-text' to='/pricing'>
              <span>Pricing</span>
            </Link>
          </li> */}
            {/* <li className='link'>
              <Link className='link-text' to='/supportUs'>
                <span>Support Us</span>
              </Link>
            </li> */}
            <li className="link">
              <Link className="link-text" to="/attend">
                <span>Attend</span>
              </Link>
            </li>
            <li className="link">
              <Link
                className="link-text"
                // target="_blank"
                // rel="noopener noreferrer"
                to="/faq"
              >
                <span>FAQ</span>
              </Link>
            </li>
            <li className="link">
              <Link className="link-text" to="/about">
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
