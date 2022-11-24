import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaToggleOff,
  FaWaze,
  FaBookOpen
} from 'react-icons/fa';
import './Header.css';

export const Header = () => {
    const [navActive , setNavActive] = useState("navbar");
    const mobileNav = () => {
        setNavActive(navActive === 'navbar' ? 'navbar navbarActive' : "navbar");
    }

  return (
    <section className="section-header">
      <header className="header">
        <div className="logodiv">
          <Link to="/">
            <h1>
              <FaWaze className='icon'/>
              Horavel
            </h1>
          </Link>
        </div>
        <div className={navActive}>
          <ul className="navlist">
            <li className="navitem">
              <Link className="navlink">Home</Link>
            </li>
            <li className="navitem">
              <Link className="navlink">Pages</Link>
            </li>
            <li className="navitem">
              <Link className="navlink">About</Link>
            </li>
            <li className="navitem">
              <Link className="navlink">Contact</Link>
            </li>

            <button className="btn">
              <Link>
                <FaBookOpen />
                &nbsp; NOW
              </Link>
            </button>
          </ul>
        </div>

        <div className="toggleBtn" onClick={mobileNav}>
          <FaToggleOff className="icon" />
        </div>
      </header>
    </section>
  );
};
