import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import restaurant_logo from '../restaurant_logo.png'


const Navbar = () => {
  const brandStyle = {
    fontSize: 'x-large',
    fontWeight: 'bolder',
    color: '#FFA500'
  };

  const iconStyle = {
    borderRadius: '50%',
    backgroundColor: '#5A67A1',
    color: '#eff2f7',
    fontSize: 'x-large',
    padding: '5px',
    margin: '0 5px'
  };

  const navItems = ['Home', 'Menu', 'About Us', 'Blog', 'Contact', 'FAQ'];
  const socialMedia = [
    { href: 'https://twitter.com/ineedfood', icon: 'twitter' },
    { href: 'https://facebook.com/ineedfood', icon: 'facebook' },
    { href: 'https://instagram.com/ineedfood', icon: 'instagram' }
  ];

  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#333333"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={brandStyle}>
          <img src={restaurant_logo} alt="Logo" height="60px" />
          I NeeD FooD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link text-light" href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="d-none d-lg-flex">
            {socialMedia.map((social) => (
              <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.icon}>
                <i className={`bi bi-${social.icon}`} style={iconStyle}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
