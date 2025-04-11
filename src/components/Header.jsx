import React from 'react'
import logo from "../assets/images/logo.svg"
import callIcon from "../assets/images/call-icon.svg"

const Header = () => {
  return (
    <header className="container-fluid mainContent header">
  <div className="row">
    <div className="col-12 col-sm-12 col-md-2 col-lg-2 head-left">
      <a href="index.html">
        <img src={logo} alt="" />
      </a>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 head-middle">
      <ul>
        <li className="active">
          <a href="#">Home </a>
        </li>
        <li>
          <a href="#">Products </a>
        </li>
        <li>
          <a href="#">About Us </a>
        </li>
        <li>
          <a href="#">Sustainability</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Clients</a>
        </li>
      </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 head-right">
      <div className="call">
        <div className="box">
          <a href="tel:+97125555690">
            <div className="call-icon">
              <img src={callIcon} alt="" />
            </div>
            <h4>+971 2 555 5690</h4>
          </a>
        </div>
      </div>
      <div className="menu-btn">
        <a href="contact.html" className="button gradient-border">
          <span>Contact</span>
        </a>
      </div>
      <div className="menu-btn hamburger_menu">
        <a href="javascript:void(0)" className="button gradient-border">
          <span>Menu</span>
        </a>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header
